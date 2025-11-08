import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, Apple, Monitor, CheckCircle2, ExternalLink } from 'lucide-react'
import { DOWNLOAD_CONFIG } from '@/lib/download-config'

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Latest Version: {DOWNLOAD_CONFIG.version}
        </Badge>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Download JamSheed AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Available for macOS, Windows, and Linux. Free forever.
        </p>
      </div>

      {/* Alternative Download Link */}
      <div className="text-center mb-8">
        <Link href={DOWNLOAD_CONFIG.releasesPageUrl} target="_blank" rel="noopener noreferrer">
          <Button variant="link" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            View all releases on GitHub
          </Button>
        </Link>
      </div>

      {/* Download Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {/* macOS */}
        <Card className="p-8 text-center hover:border-blue-600 transition-all">
          <Apple className="w-16 h-16 mx-auto mb-4 text-gray-800 dark:text-gray-200" />
          <h3 className="text-2xl font-bold mb-2">macOS</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Universal (Intel & Apple Silicon)
          </p>
          <div className="space-y-2">
            <a href={DOWNLOAD_CONFIG.downloads.macos.dmg} download>
              <Button className="w-full gap-2" size="lg">
                <Download className="w-4 h-4" />
                Download DMG
              </Button>
            </a>
            <a href={DOWNLOAD_CONFIG.downloads.macos.zip} download>
              <Button className="w-full gap-2" size="sm" variant="outline">
                <Download className="w-4 h-4" />
                Download ZIP
              </Button>
            </a>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {DOWNLOAD_CONFIG.downloads.macos.requirements}
          </p>
          <p className="text-xs text-muted-foreground">
            {DOWNLOAD_CONFIG.downloads.macos.size}
          </p>
        </Card>

        {/* Windows */}
        <Card className="p-8 text-center hover:border-blue-600 transition-all border-blue-600 border-2">
          <Monitor className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h3 className="text-2xl font-bold mb-2">Windows</h3>
          <Badge className="mb-4" variant="default">Most Popular</Badge>
          <p className="text-sm text-muted-foreground mb-6">
            64-bit installer
          </p>
          <a href={DOWNLOAD_CONFIG.downloads.windows.exe} download>
            <Button className="w-full gap-2" size="lg">
              <Download className="w-4 h-4" />
              Download for Windows
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-3">
            {DOWNLOAD_CONFIG.downloads.windows.requirements}
          </p>
          <p className="text-xs text-muted-foreground">
            {DOWNLOAD_CONFIG.downloads.windows.size}
          </p>
        </Card>

        {/* Linux */}
        <Card className="p-8 text-center hover:border-blue-600 transition-all">
          <svg
            className="w-16 h-16 mx-auto mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.41 1.738-.41 2.494 0 .696.09 1.352.315 1.944.24.627.686 1.23 1.358 1.23.296 0 .554-.081.765-.225.42-.285.681-.725.681-1.275 0-.296-.045-.585-.135-.855-.09-.255-.21-.51-.375-.72-.21-.27-.465-.495-.78-.66-.12-.06-.27-.12-.42-.165-.03-.015-.075-.03-.105-.045-.12-.06-.21-.105-.285-.165-.195-.165-.345-.39-.435-.66-.045-.12-.075-.255-.075-.39 0-.195.045-.39.135-.57.225-.48.78-.87 1.38-.975.27-.045.555-.06.84-.045.855.045 1.74.345 2.52.87.885.585 1.62 1.47 2.115 2.49.195.405.345.855.45 1.32.03.12.045.255.06.375.015.09.03.195.03.285 0 .105-.015.21-.03.3-.045.255-.135.495-.255.72-.12.21-.27.39-.465.54-.18.135-.405.24-.645.3-.12.03-.255.045-.375.045-.345 0-.66-.105-.93-.3-.285-.21-.51-.51-.645-.87-.06-.165-.09-.345-.09-.525 0-.27.06-.525.18-.765.105-.21.27-.39.465-.525.195-.135.42-.225.66-.255.105-.015.21-.015.315-.015.18 0 .345.03.51.075.165.045.315.12.45.21.135.09.255.21.345.345.045.06.09.135.12.21.03.075.045.15.06.225.015.075.015.15.015.225 0 .105-.015.21-.045.315-.03.105-.075.195-.135.285-.06.075-.135.15-.225.21-.09.06-.195.105-.3.135-.06.015-.12.03-.18.03-.075 0-.15-.015-.21-.045-.075-.03-.135-.075-.195-.12-.045-.045-.09-.105-.12-.165-.03-.06-.045-.135-.045-.21 0-.105.03-.195.09-.285.045-.075.12-.135.21-.18.075-.03.165-.045.255-.045.075 0 .15.015.21.03.075.03.135.06.195.105.045.045.09.09.12.15.03.045.045.105.06.165.015.045.015.09.015.135 0 .06-.015.12-.03.18-.015.045-.045.09-.075.135-.03.03-.075.06-.12.075-.03.015-.075.03-.12.03-.06 0-.12-.015-.165-.045-.06-.03-.105-.075-.135-.12-.03-.06-.06-.12-.06-.195 0-.075.015-.15.045-.21.03-.075.075-.135.135-.18.06-.045.12-.075.195-.09.06-.015.12-.015.18-.015.075 0 .15.015.21.045.075.03.135.075.18.135.06.06.09.135.12.21.015.075.03.15.03.225 0 .12-.015.24-.06.345-.03.105-.09.21-.165.3-.075.09-.165.165-.27.21-.105.06-.225.09-.345.09-.165 0-.315-.045-.45-.135-.135-.09-.255-.21-.33-.36-.09-.15-.135-.315-.135-.495 0-.255.075-.495.21-.705.135-.21.33-.375.555-.48.225-.105.48-.165.75-.165.345 0 .66.09.93.27.285.18.51.42.66.72.15.3.225.63.225.975 0 .42-.09.825-.27 1.185-.18.36-.435.66-.75.885-.315.225-.69.345-1.08.345-.525 0-.99-.18-1.365-.54-.375-.36-.63-.84-.72-1.395-.045-.255-.06-.525-.06-.795 0-.405.06-.81.18-1.185.12-.375.3-.72.54-1.02.24-.3.54-.54.885-.705.345-.165.735-.255 1.155-.255.555 0 1.05.135 1.485.405.435.27.78.645 1.02 1.095.24.45.36.96.36 1.515 0 .675-.15 1.305-.45 1.86-.3.555-.72 1.005-1.245 1.335-.525.33-1.125.495-1.785.495-.825 0-1.56-.24-2.175-.72-.615-.48-1.08-1.14-1.365-1.95-.285-.81-.405-1.74-.33-2.685.075-.945.36-1.845.855-2.64.495-.795 1.2-1.44 2.085-1.905.885-.465 1.92-.705 3.06-.705 1.41 0 2.67.33 3.72.975 1.05.645 1.86 1.545 2.4 2.67.54 1.125.81 2.415.81 3.84 0 1.68-.39 3.195-1.17 4.5-.78 1.305-1.86 2.325-3.21 3.03-1.35.705-2.88 1.065-4.56 1.065-1.95 0-3.69-.45-5.175-1.335-1.485-.885-2.64-2.115-3.435-3.66-.795-1.545-1.2-3.33-1.2-5.31 0-2.22.495-4.23 1.485-5.97.99-1.74 2.37-3.09 4.095-4.005 1.725-.915 3.72-1.38 5.925-1.38.825 0 1.635.075 2.415.21z" />
          </svg>
          <h3 className="text-2xl font-bold mb-2">Linux</h3>
          <p className="text-sm text-muted-foreground mb-6">
            AppImage / deb / rpm
          </p>
          <div className="space-y-2">
            <a href={DOWNLOAD_CONFIG.downloads.linux.appimage} download>
              <Button className="w-full gap-2" size="lg" variant="outline">
                <Download className="w-4 h-4" />
                AppImage
              </Button>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a href={DOWNLOAD_CONFIG.downloads.linux.deb} download>
                <Button className="w-full gap-2" size="sm" variant="ghost">
                  .deb
                </Button>
              </a>
              <a href={DOWNLOAD_CONFIG.downloads.linux.rpm} download>
                <Button className="w-full gap-2" size="sm" variant="ghost">
                  .rpm
                </Button>
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {DOWNLOAD_CONFIG.downloads.linux.requirements}
          </p>
          <p className="text-xs text-muted-foreground">
            {DOWNLOAD_CONFIG.downloads.linux.size}
          </p>
        </Card>
      </div>

      {/* Installation Steps */}
      <div className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Installation is easy
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Download</h3>
            <p className="text-sm text-muted-foreground">
              Click the download button for your platform
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">Install</h3>
            <p className="text-sm text-muted-foreground">
              Double-click the installer and follow the prompts
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Activate</h3>
            <p className="text-sm text-muted-foreground">
              Enter your license key and start using JamSheed AI
            </p>
          </div>
        </div>
      </div>

      {/* Features Recap */}
      <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          What's included
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Multi-LLM support (Claude, GPT, Gemini)',
            'Terminal integration',
            'File analysis & editing',
            'Prompt caching',
            'Conversation history',
            'Semantic search',
            'Auto-updates',
            'Offline mode',
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
