'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

export function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
          <span className="font-bold text-xl">JamSheed AI</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition">
            Blog
          </Link>
          <Link href="/download" className="text-sm text-muted-foreground hover:text-foreground transition">
            Download
          </Link>
          <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition">
            Docs
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <ThemeToggle />
          {!loading && (
            <>
              {user ? (
                <>
                  <Link href="/dashboard" className="hidden sm:block">
                    <Button variant="ghost" size="sm">Dashboard</Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login" className="hidden sm:block">
                    <Button variant="ghost" size="sm">Sign In</Button>
                  </Link>
                  <Link href="/signup">
                    <Button size="sm">Get Started</Button>
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
