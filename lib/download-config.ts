// Download configuration for JamSheed AI
// Update these when you publish new releases to GitHub

export const DOWNLOAD_CONFIG = {
  version: 'v2.0.0',
  githubRepo: 'yusufpangal/cemsit-graph-electron',

  // Direct download links - will be active after creating GitHub Release
  downloads: {
    macos: {
      dmg: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/JamSheed-AI-2.0.0-arm64.dmg',
      zip: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/JamSheed-AI-2.0.0-arm64-mac.zip',
      requirements: 'macOS 11.0+ (Big Sur or later)',
      size: '126 MB'
    },
    windows: {
      exe: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/JamSheed-AI-Setup-2.0.0.exe',
      requirements: 'Windows 10/11 (x64)',
      size: '~130 MB'
    },
    linux: {
      appimage: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/JamSheed-AI-2.0.0.AppImage',
      deb: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/jamsheed-ai_2.0.0_amd64.deb',
      rpm: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/download/v2.0.0/jamsheed-ai-2.0.0.x86_64.rpm',
      requirements: 'Ubuntu 20.04+ / Fedora 35+',
      size: '~135 MB'
    }
  },

  // Fallback to releases page if direct links not working
  releasesPageUrl: 'https://github.com/yusufpangal/cemsit-graph-electron/releases/latest'
}
