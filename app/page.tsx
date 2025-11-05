import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowRight,
  Mic,
  Workflow,
  FileSpreadsheet,
  MessageSquare,
  Plug,
  Sparkles,
  Mail,
  Shield,
  Zap
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <Badge className="mb-6" variant="secondary">
          ✨ Control your computer with voice commands
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Talk to Your Computer,
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Automate Your Work
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          JamSheed AI transforms your computer into an intelligent assistant.
          Execute commands by voice, automate routine tasks,
          send emails, generate reports—all by speaking naturally.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/download">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Download Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Pricing
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Secure & Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Fast Response</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Smart Automation</span>
          </div>
        </div>
      </section>

      {/* Features Section - User-Focused */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Can You Do?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplify your daily tasks with JamSheed AI
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Mic className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Voice Commands</h3>
            <p className="text-muted-foreground">
              "Turn up volume", "Launch Spotify", "Take notes" - control your computer by speaking.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Workflow className="w-12 h-12 mb-4 text-purple-600" />
            <h3 className="text-xl font-bold mb-2">Automation</h3>
            <p className="text-muted-foreground">
              Automate repetitive tasks. Organize files, backup data, run scripts automatically.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-xl font-bold mb-2">Email Management</h3>
            <p className="text-muted-foreground">
              "Send meeting invite", "Check invoices" - manage your emails with AI assistance.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FileSpreadsheet className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="text-xl font-bold mb-2">Report Generation</h3>
            <p className="text-muted-foreground">
              Create Excel spreadsheets, PDF reports, data analysis - all by speaking.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Plug className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Integrations</h3>
            <p className="text-muted-foreground">
              Slack, Notion, Google Drive, Calendar - seamlessly integrate with all your tools.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageSquare className="w-12 h-12 mb-4 text-indigo-600" />
            <h3 className="text-xl font-bold mb-2">Smart Assistant</h3>
            <p className="text-muted-foreground">
              Take meeting notes, set reminders, do research - everything in natural language.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Who Can Use It?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="mb-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Business Professionals</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Boost Productivity</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Auto-summarize meeting notes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Reply to emails with AI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Prepare reports and presentations quickly</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 border-blue-600">
            <div className="mb-4">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Developers</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Accelerate Coding</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Generate scripts and code</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Automate terminal commands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Analyze files and data</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Students</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Simplify Learning</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Research and find resources</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Complete homework and projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Organize notes efficiently</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Does It Work?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in 3 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Download & Install</h3>
            <p className="text-muted-foreground">
              Download free for macOS, Windows, or Linux. Installation takes just 1 minute.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Activate Your License</h3>
            <p className="text-muted-foreground">
              Create a free account, enter your license key, and start using right away.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Start Talking</h3>
            <p className="text-muted-foreground">
              Control your computer with voice or text commands. It's that simple!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to Boost Your Productivity?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Thousands of users are already saving time with JamSheed AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                Download Free
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white w-full sm:w-auto">
                View Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
