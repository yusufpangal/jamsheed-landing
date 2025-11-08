'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Key, AlertCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

interface LicenseData {
  key: string
  status: 'unused' | 'active' | 'expired' | 'revoked'
  device_id: string | null
  device_name: string | null
  activated_at: string | null
  expires_at: string | null
}

export default function LicenseKeyPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [licenseData, setLicenseData] = useState<LicenseData | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const loadLicense = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)

      // Fetch license key data
      const { data: license, error } = await supabase
        .from('license_keys')
        .select('key, status, device_id, device_name, activated_at, expires_at')
        .eq('user_id', session.user.id)
        .single()

      if (license) {
        setLicenseData(license)
      } else if (error) {
        console.error('License fetch error:', error)
      }

      setLoading(false)
    }

    loadLicense()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.push('/login')
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [router])

  const copyToClipboard = async () => {
    if (licenseData?.key) {
      await navigator.clipboard.writeText(licenseData.key)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', text: string }> = {
      unused: { variant: 'secondary', text: 'Not Activated' },
      active: { variant: 'default', text: 'Active' },
      expired: { variant: 'destructive', text: 'Expired' },
      revoked: { variant: 'destructive', text: 'Revoked' },
    }
    const config = variants[status] || variants.unused
    return <Badge variant={config.variant}>{config.text}</Badge>
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!licenseData) {
    return (
      <div>
        <Link href="/dashboard">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Link>

        <Card className="p-8 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">No License Key Found</h2>
          <p className="text-muted-foreground mb-6">
            You don't have a license key yet. Please subscribe to a plan to get your license key.
          </p>
          <Link href="/pricing">
            <Button>View Pricing Plans</Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <Link href="/dashboard">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your License Key</h1>
        <p className="text-muted-foreground">
          Use this key to activate JamSheed AI on your desktop application
        </p>
      </div>

      {/* License Key Card */}
      <Card className="p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Key className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">License Key</h3>
              <p className="text-sm text-muted-foreground">Status: {getStatusBadge(licenseData.status)}</p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg mb-4 font-mono text-sm break-all">
          {licenseData.key}
        </div>

        <Button
          onClick={copyToClipboard}
          className="w-full gap-2"
          variant={copied ? 'secondary' : 'default'}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy License Key
            </>
          )}
        </Button>
      </Card>

      {/* Device Info Card */}
      {licenseData.device_id && (
        <Card className="p-6 mb-6">
          <h3 className="font-semibold mb-4">Activated Device</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Device Name</span>
              <span className="font-medium">{licenseData.device_name || 'Unknown'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Device ID</span>
              <span className="font-mono text-xs">{licenseData.device_id.substring(0, 16)}...</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Activated At</span>
              <span className="font-medium">
                {licenseData.activated_at
                  ? new Date(licenseData.activated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : 'Not activated'}
              </span>
            </div>
            {licenseData.expires_at && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Expires At</span>
                <span className="font-medium">
                  {new Date(licenseData.expires_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* How to Use Card */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-900">
        <h3 className="font-semibold mb-3">How to activate</h3>
        <ol className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="font-bold text-blue-600">1.</span>
            <span>Download and install JamSheed AI desktop app</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-600">2.</span>
            <span>Open the application</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-600">3.</span>
            <span>Click "Activate License" when prompted</span>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-blue-600">4.</span>
            <span>Paste your license key and click "Activate"</span>
          </li>
        </ol>
        <Link href="/download" className="block mt-4">
          <Button variant="outline" className="w-full">
            Download Desktop App
          </Button>
        </Link>
      </Card>
    </div>
  )
}
