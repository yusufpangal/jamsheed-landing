'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, Check, Key, Laptop } from 'lucide-react'

export default function LicenseKeyPage() {
  const [copied, setCopied] = useState(false)

  // Mock data (will be replaced with real Supabase data)
  const license = {
    key: 'JMSD-REAL-MAC-2024-TEST',
    status: 'active',
    deviceName: 'Yusufs-MacBook-Pro.local',
    activatedAt: '2024-11-05',
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(license.key)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
          <code className="text-lg font-mono">{license.key}</code>
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
            Activated on {license.activatedAt}
          </span>
        </div>
      </Card>

      {/* Device Info */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Laptop className="w-5 h-5 text-muted-foreground" />
          <h3 className="font-semibold">Activated Device</h3>
        </div>
        <div className="bg-muted p-4 rounded-lg">
          <p className="font-mono text-sm">{license.deviceName}</p>
          <p className="text-xs text-muted-foreground mt-1">
            darwin-arm64 (Apple Silicon)
          </p>
        </div>
      </Card>

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
