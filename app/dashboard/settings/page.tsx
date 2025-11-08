'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'
import { Settings, LogOut, Trash2, User as UserIcon } from 'lucide-react'

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUserData = async () => {
      const { data: { session } } = await supabase.auth.getSession()

      if (!session) {
        router.push('/login')
        return
      }

      setUser(session.user)
      setLoading(false)
    }

    loadUserData()

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

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading settings...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Account Settings</h1>
        <p className="text-muted-foreground">
          Manage your account preferences and security
        </p>
      </div>

      {/* Account Information */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <UserIcon className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Account Information</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <div className="flex items-center gap-2 mt-1">
              <p className="font-medium">{user?.email}</p>
              {user?.email_confirmed_at && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">User ID</label>
            <p className="font-mono text-xs mt-1 text-muted-foreground">
              {user?.id}
            </p>
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Account Created</label>
            <p className="mt-1">
              {user?.created_at && new Date(user.created_at).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </p>
          </div>
        </div>
      </Card>

      {/* Security */}
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold">Security</h3>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Password</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Update your password to keep your account secure
            </p>
            <Button variant="outline" size="sm" disabled>
              Change Password (Coming Soon)
            </Button>
          </div>
        </div>
      </Card>

      {/* Actions */}
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Account Actions</h3>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Sign Out</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Sign out of your account on this device
            </p>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={handleSignOut}
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-medium mb-2 text-red-600">Delete Account</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Permanently delete your account and all associated data. This action cannot be undone.
            </p>
            <Button
              variant="destructive"
              size="sm"
              className="gap-2"
              disabled
            >
              <Trash2 className="w-4 h-4" />
              Delete Account (Coming Soon)
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
