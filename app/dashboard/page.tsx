'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Download, Zap, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  // Mock data (will be replaced with real Supabase data)
  const subscription = {
    plan: 'Free',
    status: 'active',
    tokensUsed: 12450,
    tokensLimit: 50000,
    periodEnd: '2025-12-05',
  }

  const usagePercentage = (subscription.tokensUsed / subscription.tokensLimit) * 100

  return (
    <div>
      {/* Demo Mode Banner */}
      <Card className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <div>
              <p className="font-semibold text-sm">Demo Mode</p>
              <p className="text-xs text-muted-foreground">
                This is a preview with sample data. Sign up to see your real usage stats.
              </p>
            </div>
          </div>
          <Link href="/pricing">
            <Button size="sm" variant="default">
              Create Account
            </Button>
          </Link>
        </div>
      </Card>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
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
          <div className="text-2xl font-bold">Dec 5</div>
          <p className="text-xs text-muted-foreground mt-1">2025</p>
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
