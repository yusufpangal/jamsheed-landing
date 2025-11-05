import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Zap } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for trying out JamSheed AI',
    features: [
      '50,000 tokens/month',
      'Gemini 2.5 Flash only',
      '1 device',
      'Community support',
      'Basic features',
    ],
    cta: 'Get Started',
    href: '/download',
    popular: false,
  },
  {
    name: 'Pro',
    price: 19,
    description: 'For professionals who need unlimited AI',
    features: [
      'Unlimited tokens',
      'All models (Claude Sonnet 4.5, Gemini, GPT)',
      '1 device',
      'Email support',
      'Priority queue',
      'Advanced features',
      'Prompt caching',
    ],
    cta: 'Start Pro Trial',
    href: '/dashboard',
    popular: true,
  },
  {
    name: 'Team',
    price: 49,
    description: 'For teams who need multiple devices',
    features: [
      'Unlimited tokens',
      'All models (Claude, Gemini, GPT)',
      '3 devices',
      'Priority support',
      'Team management',
      'Usage analytics',
      'Custom integrations',
      'API access',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that's right for you. Upgrade, downgrade, or cancel anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`p-8 relative ${
              plan.popular ? 'border-blue-600 border-2 shadow-xl' : ''
            }`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                <Zap className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {plan.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={plan.href} className="w-full">
              <Button
                className="w-full"
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold mb-2">What happens when I exceed my token limit?</h3>
            <p className="text-muted-foreground">
              Free tier users will see a "quota exceeded" message and can upgrade to Pro for unlimited usage. Pro and Team users never hit limits.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
            <p className="text-muted-foreground">
              Yes! Upgrade or downgrade anytime. Changes take effect immediately, and we'll prorate your billing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">What models are included?</h3>
            <p className="text-muted-foreground">
              Free tier: Gemini 2.5 Flash only. Pro/Team: All models including Claude Sonnet 4.5, Claude Haiku, Gemini 2.5 Pro/Flash, GPT-4o, and GPT-4o Mini.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Is my data secure?</h3>
            <p className="text-muted-foreground">
              Absolutely. All API keys are encrypted, conversations are stored locally on your device, and we never track or sell your data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 14-day money-back guarantee. If you're not satisfied, contact us for a full refund.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to supercharge your workflow?
        </h2>
        <p className="text-lg mb-8 opacity-90">
          Join thousands of developers, researchers, and power users.
        </p>
        <Link href="/download">
          <Button size="lg" variant="secondary">
            Download for Free
          </Button>
        </Link>
      </div>
    </div>
  )
}
