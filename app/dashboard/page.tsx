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
  key: string
  status: string
  expires_at: string | null
}

interface SubscriptionData {
  plan_id: string
  status: string
  current_period_end: string
}

interface PlanFeatures {
  maxTokens: number
  models: string[]
}

interface UsageStats {
  totalTokens: number
  totalCost: number
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [licenseData, setLicenseData] = useState<LicenseData | null>(null)
  const [subscriptionData, setSubscriptionData] = useState<SubscriptionData | null>(null)
  const [planName, setPlanName] = useState('Free')
  const [usageStats, setUsageStats] = useState<UsageStats>({ totalTokens: 0, totalCost: 0 })
  const [planFeatures, setPlanFeatures] = useState<PlanFeatures>({ maxTokens: 50000, models: ['gemini-2.5-flash'] })

  useEffect(() => {
    // Check authentication and load license data
    const loadData = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)

      // Fetch license key data from Supabase
      const { data: license, error: licenseError } = await supabase
        .from('license_keys')
        .select('key, status, expires_at')
        .eq('user_id', session.user.id)
        .single()

      if (license) {
        setLicenseData(license)
      } else if (licenseError) {
        console.log('No license key found:', licenseError)
      }

      // Fetch subscription data
      const { data: subscription, error: subError } = await supabase
        .from('subscriptions')
        .select('plan_id, status, current_period_start, current_period_end, pricing_plans(name, features)')
        .eq('user_id', session.user.id)
        .single()

      if (subscription) {
        setSubscriptionData(subscription)
        // @ts-ignore - Supabase nested select
        setPlanName(subscription.pricing_plans?.name || 'Free')
        // @ts-ignore - Supabase nested select
        const features = subscription.pricing_plans?.features
        if (features) {
          setPlanFeatures({
            maxTokens: features.maxTokens || 50000,
            models: features.models || ['gemini-2.5-flash']
          })
        }
      } else if (subError) {
        console.log('No subscription found:', subError)
      }

      // Fetch usage statistics from usage_logs
      // Get current billing period dates
      const periodStart = subscription?.current_period_start
        ? new Date(subscription.current_period_start).toISOString()
        : new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString() // Last 30 days fallback

      const { data: usageLogs, error: usageError } = await supabase
        .from('usage_logs')
        .select('input_tokens, output_tokens, cost')
        .eq('user_id', session.user.id)
        .gte('created_at', periodStart)

      if (usageLogs && usageLogs.length > 0) {
        const totalTokens = usageLogs.reduce((sum, log) =>
          sum + (log.input_tokens || 0) + (log.output_tokens || 0), 0
        )
        const totalCost = usageLogs.reduce((sum, log) => sum + (log.cost || 0), 0)
        setUsageStats({ totalTokens, totalCost })
      } else if (usageError) {
        console.log('No usage logs found:', usageError)
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
  const subscription = subscriptionData ? {
    plan: planName,
    status: subscriptionData.status,
    tokensUsed: usageStats.totalTokens,
    tokensLimit: planFeatures.maxTokens,
    totalCost: usageStats.totalCost,
    periodEnd: new Date(subscriptionData.current_period_end).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
  } : {
    plan: 'Free',
    status: licenseData?.status || 'inactive',
    tokensUsed: usageStats.totalTokens,
    tokensLimit: 50000,
    totalCost: usageStats.totalCost,
    periodEnd: 'Not activated',
  }

  // Handle unlimited plans (maxTokens = -1 or very high number)
  const isUnlimited = subscription.tokensLimit === -1 || subscription.tokensLimit >= 999999999
  const usagePercentage = isUnlimited ? 0 : (subscription.tokensUsed / subscription.tokensLimit) * 100

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
            {isUnlimited ? 'Unlimited' : `of ${subscription.tokensLimit.toLocaleString()}`}
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
          <div className="text-2xl font-bold">${subscription.totalCost.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground mt-1">this period</p>
        </Card>
      </div>

      {/* Usage Progress */}
      <Card className="p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Token Usage</h3>
            <p className="text-sm text-muted-foreground">
              {isUnlimited
                ? `${subscription.tokensUsed.toLocaleString()} tokens used this period`
                : `${usagePercentage.toFixed(1)}% of monthly quota`
              }
            </p>
          </div>
          {!isUnlimited && subscription.plan === 'Free' && (
            <Link href="/pricing">
              <Button variant="outline" size="sm">
                Upgrade Plan
              </Button>
            </Link>
          )}
        </div>
        {!isUnlimited && (
          <>
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
          </>
        )}
        {isUnlimited && (
          <div className="text-center py-4">
            <Badge variant="secondary" className="text-sm">
              <Zap className="w-3 h-3 mr-1" />
              Unlimited Usage
            </Badge>
          </div>
        )}
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
