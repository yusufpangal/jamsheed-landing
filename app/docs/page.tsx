import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  BookOpen,
  Mic,
  Terminal,
  Settings,
  Workflow,
  Plug,
  Shield,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          <BookOpen className="w-3 h-3 mr-1" />
          Documentation
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          JamSheed AI Documentation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know to get started and master JamSheed AI
        </p>
      </div>

      {/* Quick Start */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Install</h3>
            <p className="text-muted-foreground mb-4">
              Download JamSheed AI for your platform (macOS, Windows, or Linux) and run the installer.
            </p>
            <Link href="/download" className="text-sm text-blue-600 hover:underline">
              Download now →
            </Link>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Activate License</h3>
            <p className="text-muted-foreground mb-4">
              Launch the app and enter your license key. Free tier includes 50K tokens/month.
            </p>
            <Link href="/pricing" className="text-sm text-purple-600 hover:underline">
              View pricing →
            </Link>
          </Card>

          <Card className="p-6">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Start Talking</h3>
            <p className="text-muted-foreground mb-4">
              Use voice or text to give commands. Try: "Turn up volume" or "Open Spotify"
            </p>
          </Card>
        </div>
      </section>

      {/* Core Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Core Features</h2>

        {/* Voice Commands */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mic className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Voice Commands</h3>
              <p className="text-muted-foreground mb-4">
                Control your computer naturally with your voice. JamSheed AI uses advanced speech recognition to understand your commands.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Example Commands:</h4>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-background px-2 py-1 rounded">"Turn up the volume"</code> - Adjust system volume</li>
                  <li><code className="bg-background px-2 py-1 rounded">"Open Spotify and play my workout playlist"</code> - Launch apps and control media</li>
                  <li><code className="bg-background px-2 py-1 rounded">"Take a note: Meeting with John at 3pm"</code> - Quick note-taking</li>
                  <li><code className="bg-background px-2 py-1 rounded">"Show me files modified today"</code> - File operations</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Automation */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Workflow className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Task Automation</h3>
              <p className="text-muted-foreground mb-4">
                Automate repetitive tasks and workflows. Create custom automation scripts or use natural language.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Example Automations:</h4>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-background px-2 py-1 rounded">"Organize downloads folder by file type"</code></li>
                  <li><code className="bg-background px-2 py-1 rounded">"Backup my documents to external drive"</code></li>
                  <li><code className="bg-background px-2 py-1 rounded">"Send weekly report to team@company.com"</code></li>
                  <li><code className="bg-background px-2 py-1 rounded">"Resize all images in this folder to 1920x1080"</code></li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Terminal Integration */}
        <Card className="p-8 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Terminal className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Terminal Integration</h3>
              <p className="text-muted-foreground mb-4">
                Execute terminal commands using natural language. No need to remember complex syntax.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Natural Language to Commands:</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted-foreground">You say:</span> <code className="bg-background px-2 py-1 rounded">"Find all JavaScript files in this project"</code></li>
                  <li><span className="text-muted-foreground">Runs:</span> <code className="bg-background px-2 py-1 rounded text-green-600">find . -name "*.js"</code></li>
                  <li className="mt-3"><span className="text-muted-foreground">You say:</span> <code className="bg-background px-2 py-1 rounded">"Show disk usage"</code></li>
                  <li><span className="text-muted-foreground">Runs:</span> <code className="bg-background px-2 py-1 rounded text-green-600">df -h</code></li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Integrations */}
        <Card className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Plug className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Integrations</h3>
              <p className="text-muted-foreground mb-4">
                Connect JamSheed AI with your favorite tools and services for seamless workflows.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Email & Calendar</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Gmail integration</li>
                    <li>• Outlook integration</li>
                    <li>• Google Calendar</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Productivity</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Slack</li>
                    <li>• Notion</li>
                    <li>• Trello</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Storage</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Google Drive</li>
                    <li>• Dropbox</li>
                    <li>• OneDrive</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Development</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• GitHub</li>
                    <li>• GitLab</li>
                    <li>• Jira</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Configuration */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Configuration & Settings</h2>
        <Card className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Settings className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Customization Options</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold mb-2">Voice Settings</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Choose wake word ("Hey JamSheed")</li>
                    <li>• Select input language</li>
                    <li>• Adjust microphone sensitivity</li>
                    <li>• Enable/disable voice feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Model Selection</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Claude Sonnet 4.5 (most capable)</li>
                    <li>• GPT-4o (balanced)</li>
                    <li>• Gemini 2.5 Flash (fastest)</li>
                    <li>• Auto-select based on task</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Privacy & Security</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Local conversation storage</li>
                    <li>• Encrypted API keys</li>
                    <li>• Device binding</li>
                    <li>• Clear history options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Interface</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Dark/Light mode</li>
                    <li>• Keyboard shortcuts</li>
                    <li>• Notification preferences</li>
                    <li>• Compact/Comfortable view</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <Zap className="w-8 h-8 text-yellow-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Performance Tips</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use Gemini Flash for quick tasks (faster response)</li>
              <li>• Enable prompt caching for repetitive workflows</li>
              <li>• Clear conversation history periodically</li>
              <li>• Keep the app updated for latest optimizations</li>
            </ul>
          </Card>

          <Card className="p-6">
            <Shield className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="text-xl font-bold mb-2">Security Best Practices</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Never share your license key publicly</li>
              <li>• Review automation scripts before running</li>
              <li>• Use device binding for shared computers</li>
              <li>• Enable two-factor authentication (coming soon)</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-2">How does voice recognition work?</h3>
            <p className="text-muted-foreground text-sm">
              JamSheed AI uses advanced speech-to-text models that run locally on your device for privacy. The recognized text is then processed by the AI to understand your intent.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Can I use JamSheed AI offline?</h3>
            <p className="text-muted-foreground text-sm">
              Voice recognition works offline, but AI features require an internet connection to access LLM APIs. We're working on local model support for offline AI capabilities.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Which AI models are available?</h3>
            <p className="text-muted-foreground text-sm">
              Free tier includes Gemini 2.5 Flash. Pro and Team plans include Claude Sonnet 4.5, Claude Haiku, GPT-4o, GPT-4o Mini, and Gemini 2.5 Pro/Flash.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">How do I set up integrations?</h3>
            <p className="text-muted-foreground text-sm">
              Go to Settings → Integrations, select the service you want to connect, and follow the OAuth flow. Your credentials are encrypted and stored securely.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-2">Can I customize automation workflows?</h3>
            <p className="text-muted-foreground text-sm">
              Yes! Use the Workflow Builder in the app to create custom automation sequences. You can also write scripts in JavaScript or Python that JamSheed AI can execute.
            </p>
          </Card>
        </div>
      </section>

      {/* Support CTA */}
      <section>
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our support team is here to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Contact Support
                </button>
              </Link>
              <Link href="/pricing">
                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-lg font-semibold transition">
                  Upgrade for Priority Support
                </button>
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </div>
  )
}
