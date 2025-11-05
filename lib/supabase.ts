import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types (will be auto-generated later with Supabase CLI)
export type PricingPlan = {
  id: string
  name: string
  price_monthly: number
  price_yearly: number
  features: {
    maxTokens: number
    models: string[]
    maxDevices: number
    support: string
  }
}

export type Subscription = {
  id: string
  user_id: string
  plan_id: string
  status: 'active' | 'canceled' | 'expired' | 'trialing'
  current_period_start: string
  current_period_end: string
}

export type LicenseKey = {
  id: string
  user_id: string
  key: string
  device_id: string | null
  device_name: string | null
  activated_at: string | null
  status: 'unused' | 'active' | 'expired' | 'revoked'
}
