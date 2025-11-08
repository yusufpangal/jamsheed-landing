'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import { BarChart3, TrendingUp, Zap } from 'lucide-react'

interface UsageLog {
  id: string
  model: string
  input_tokens: number
  output_tokens: number
  cost: number
  request_type: string | null
  created_at: string
}

export default function UsagePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [usageLogs, setUsageLogs] = useState<UsageLog[]>([])
  const [totalStats, setTotalStats] = useState({
    totalTokens: 0,
    totalCost: 0,
    totalRequests: 0
  })

  useEffect(() => {
    const loadUsageData = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)

      // Fetch usage logs for current billing period
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()

      const { data: logs, error } = await supabase
        .from('usage_logs')
        .select('*')
        .eq('user_id', session.user.id)
        .gte('created_at', thirtyDaysAgo)
        .order('created_at', { ascending: false })
        .limit(100)

      if (logs && logs.length > 0) {
        setUsageLogs(logs)

        const totalTokens = logs.reduce((sum, log) =>
          sum + (log.input_tokens || 0) + (log.output_tokens || 0), 0
        )
        const totalCost = logs.reduce((sum, log) => sum + (log.cost || 0), 0)

        setTotalStats({
          totalTokens,
          totalCost,
          totalRequests: logs.length
        })
      } else if (error) {
        console.log('Error fetching usage logs:', error)
      }

      setLoading(false)
    }

    loadUsageData()

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
          <p className="text-muted-foreground">Loading usage data...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Usage Analytics</h1>
        <p className="text-muted-foreground">
          Detailed breakdown of your API usage over the last 30 days
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Tokens</span>
            <BarChart3 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold">
            {totalStats.totalTokens.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Last 30 days
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Requests</span>
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div className="text-2xl font-bold">
            {totalStats.totalRequests.toLocaleString()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            API calls
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Cost</span>
            <Zap className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold">
            ${totalStats.totalCost.toFixed(4)}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            Last 30 days
          </p>
        </Card>
      </div>

      {/* Usage Log Table */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>

        {usageLogs.length === 0 ? (
          <div className="text-center py-12">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold mb-2">No usage data yet</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Start using JamSheed AI desktop app to see your usage statistics here.
              Download the app and activate it with your license key to get started.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2">Date</th>
                  <th className="text-left py-3 px-2">Model</th>
                  <th className="text-left py-3 px-2">Type</th>
                  <th className="text-right py-3 px-2">Input Tokens</th>
                  <th className="text-right py-3 px-2">Output Tokens</th>
                  <th className="text-right py-3 px-2">Cost</th>
                </tr>
              </thead>
              <tbody>
                {usageLogs.map((log) => (
                  <tr key={log.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-2">
                      {new Date(log.created_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </td>
                    <td className="py-3 px-2">
                      <Badge variant="secondary" className="text-xs">
                        {log.model}
                      </Badge>
                    </td>
                    <td className="py-3 px-2 capitalize">
                      {log.request_type || 'chat'}
                    </td>
                    <td className="py-3 px-2 text-right">
                      {log.input_tokens.toLocaleString()}
                    </td>
                    <td className="py-3 px-2 text-right">
                      {log.output_tokens.toLocaleString()}
                    </td>
                    <td className="py-3 px-2 text-right font-mono">
                      ${log.cost.toFixed(4)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
