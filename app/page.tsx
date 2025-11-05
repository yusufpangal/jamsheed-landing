import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap, Shield, Sparkles, Terminal, Code, FileText } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <Badge className="mb-6" variant="secondary">
          ✨ Now supporting Claude Sonnet 4.5, Gemini 2.5, and GPT-4
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Your AI-Powered
          <br />
          Desktop Assistant
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Chat with multiple LLMs, execute terminal commands, analyze files, and automate workflows—all from a beautiful desktop app.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link href="/download">
            <Button size="lg" className="gap-2">
              Download for Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>End-to-end encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Lightning fast</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Multi-LLM support</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to supercharge your workflow
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for developers, researchers, and power users.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <Terminal className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Terminal Integration</h3>
            <p className="text-muted-foreground">
              Execute commands, analyze output, and automate tasks with AI-powered suggestions.
            </p>
          </Card>

          <Card className="p-6">
            <Code className="w-12 h-12 mb-4 text-purple-600" />
            <h3 className="text-xl font-bold mb-2">Multi-LLM Support</h3>
            <p className="text-muted-foreground">
              Switch between Claude, GPT, and Gemini seamlessly. Compare responses side-by-side.
            </p>
          </Card>

          <Card className="p-6">
            <FileText className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-xl font-bold mb-2">File Analysis</h3>
            <p className="text-muted-foreground">
              Read, write, and edit files with AI assistance. Semantic search across your codebase.
            </p>
          </Card>

          <Card className="p-6">
            <Sparkles className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="text-xl font-bold mb-2">Prompt Caching</h3>
            <p className="text-muted-foreground">
              Save 90% on costs with intelligent prompt caching. Lightning-fast responses.
            </p>
          </Card>

          <Card className="p-6">
            <Shield className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your data stays on your device. Encrypted API key storage. No tracking.
            </p>
          </Card>

          <Card className="p-6">
            <Zap className="w-12 h-12 mb-4 text-yellow-600" />
            <h3 className="text-xl font-bold mb-2">Blazing Fast</h3>
            <p className="text-muted-foreground">
              Native desktop performance. Instant responses. Offline conversation history.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to boost your productivity?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of developers using JamSheed AI
        </p>
        <Link href="/download">
          <Button size="lg" className="gap-2">
            Download Now - It's Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
