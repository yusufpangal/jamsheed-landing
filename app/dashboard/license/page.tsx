'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Key, Laptop } from 'lucide-react'
import { supabase } from '@/lib/supabase'

interface LicenseData {
  license_key: string
  status: string
  device_name: string | null
  created_at: string
}

export default function LicenseKeyPage() {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)
  const [license, setLicense] = useState<LicenseData | null>(null)

  useEffect(() => {
    const loadLicense = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      // Fetch license data
      const { data, error } = await supabase
        .from('licenses')
        .select('license_key, status, device_name, created_at')
        .eq('user_email', session.user.email)
        .single()

      if (data) {
        setLicense(data)
      } else if (error) {
        console.error('Error fetching license:', error)
      }

      setLoading(false)
    }

    loadLicense()
  }, [router])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading license...</p>
        </div>
      </div>
    )
  }

  if (!license) {
    return (
      <div className="max-w-3xl">
        <Card className="p-8 text-center">
          <Key className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">No License Found</h2>
          <p className="text-muted-foreground mb-6">
            You don't have an active license yet. Choose a plan to get started.
          </p>
          <Button onClick={() => router.push('/pricing')}>View Pricing</Button>
        </Card>
      </div>
    )
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(license.license_key)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const activatedDate = new Date(license.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">License Key</h1>
        <p className="text-muted-foreground">
          Use this key to activate JamSheed AI on your device
        </p>
      </div>

      {/* License Key Card */}
      <Card className="p-8 mb-6">
        <div className="flex items-center gap-3 mb-6">
          <Key className="w-6 h-6 text-blue-600" />
          <div>
            <h3 className="font-semibold">Your License Key</h3>
            <p className="text-sm text-muted-foreground">
              Keep this key secure and don't share it
            </p>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg flex items-center justify-between mb-4">
          <code className="text-lg font-mono">{license.license_key}</code>
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={license.status === 'active' ? 'default' : 'secondary'}>
            {license.status}
          </Badge>
          <span className="text-sm text-muted-foreground">
            Activated on {activatedDate}
          </span>
        </div>
      </Card>

      {/* Device Info */}
      {license.device_name && (
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Laptop className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold">Activated Device</h3>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-mono text-sm">{license.device_name}</p>
          </div>
        </Card>
      )}

      {/* How to Activate */}
      <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <h3 className="font-semibold mb-4">How to activate</h3>
        <ol className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">1.</span>
            <span>Download and install JamSheed AI for your platform</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">2.</span>
            <span>Open the app and go to Settings → License</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">3.</span>
            <span>Paste your license key and click "Activate"</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">4.</span>
            <span>You're all set! Start using JamSheed AI</span>
          </li>
        </ol>
      </Card>
    </div>
  )
}
