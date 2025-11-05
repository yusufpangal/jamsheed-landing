'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Download, Zap, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

interface LicenseData {
  license_key: string
  user_email: string
  tier: string
  status: string
  tokens_used: number
  tokens_limit: number
  period_end: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [licenseData, setLicenseData] = useState<LicenseData | null>(null)

  useEffect(() => {
    // Check authentication and load license data
    const loadData = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)

      // Fetch license data from Supabase
      const { data: license, error } = await supabase
        .from('licenses')
        .select('license_key, user_email, tier, status, tokens_used, tokens_limit, period_end')
        .eq('user_email', session.user.email)
        .single()

      if (license) {
        setLicenseData(license)
      } else if (error) {
        console.error('Error fetching license:', error)
      }

      setLoading(false)
    }

    loadData()

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

  // Use real data if available, otherwise show default free tier
  const subscription = licenseData ? {
    plan: licenseData.tier.charAt(0).toUpperCase() + licenseData.tier.slice(1),
    status: licenseData.status,
    tokensUsed: licenseData.tokens_used || 0,
    tokensLimit: licenseData.tokens_limit || 50000,
    periodEnd: new Date(licenseData.period_end).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
  } : {
    plan: 'Free',
    status: 'inactive',
    tokensUsed: 0,
    tokensLimit: 50000,
    periodEnd: 'Not activated',
  }

  const usagePercentage = (subscription.tokensUsed / subscription.tokensLimit) * 100

  return (
    <div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back{user?.email ? `, ${user.email.split('@')[0]}` : ''}!</h1>
        <p className="text-muted-foreground">
          Here's an overview of your JamSheed AI usage
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Current Plan</span>
            <Zap className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold">{subscription.plan}</div>
          <Badge className="mt-2" variant="secondary">
            {subscription.status}
          </Badge>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Tokens Used</span>
            <BarChart3 className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">
            {subscription.tokensUsed.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            of {subscription.tokensLimit.toLocaleString()}
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Period Ends</span>
            <Clock className="w-4 h-4 text-orange-600" />
          </div>
          <div className="text-xl font-bold">{subscription.periodEnd}</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Cost</span>
            <DollarSign className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold">$0.00</div>
          <p className="text-xs text-muted-foreground mt-1">this month</p>
        </Card>
      </div>

      {/* Usage Progress */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Token Usage</h3>
            <p className="text-sm text-muted-foreground">
              {usagePercentage.toFixed(1)}% of monthly quota
            </p>
          </div>
          <Link href="/pricing">
            <Button variant="outline" size="sm">
              Upgrade Plan
            </Button>
          </Link>
        </div>
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className={`h-full ${
              usagePercentage > 80 ? 'bg-red-600' : 'bg-blue-600'
            }`}
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
          <span>0</span>
          <span>{subscription.tokensLimit.toLocaleString()} tokens</span>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Download Desktop App</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest version of JamSheed AI for your platform
          </p>
          <Link href="/download">
            <Button className="gap-2">
              <Download className="w-4 h-4" />
              Download App
            </Button>
          </Link>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">View License Key</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Copy your license key to activate the desktop app
          </p>
          <Link href="/dashboard/license">
            <Button variant="outline" className="gap-2">
              View Key
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  )
}

// Import BarChart3 icon
import { BarChart3 } from 'lucide-react'
