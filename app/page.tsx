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
  Volume2,
  Mail,
  Calendar,
  Shield,
  Zap
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 text-center">
        <Badge className="mb-6" variant="secondary">
          ✨ Bilgisayarınızı sesli komutlarla kontrol edin
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Bilgisayarınızla Konuşun,
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            İşlerinizi Otomatikleştirin
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          JamSheed AI ile bilgisayarınız akıllı bir asistana dönüşür.
          Sesli komutlarla işlem yapın, rutin görevleri otomatikleştirin,
          e-posta gönderin, rapor oluşturun—hepsi doğal dilde konuşarak.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href="/download">
            <Button size="lg" className="gap-2 w-full sm:w-auto">
              Ücretsiz İndirin
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Fiyatlandırma
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Güvenli & Şifreli</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            <span>Hızlı Yanıt</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Akıllı Otomasyon</span>
          </div>
        </div>
      </section>

      {/* Features Section - User-Focused */}
      <section id="features" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Neler Yapabilirsiniz?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            JamSheed AI ile günlük işlerinizi kolaylaştırın
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Mic className="w-12 h-12 mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Sesli Komut</h3>
            <p className="text-muted-foreground">
              "Volume aç", "Spotify başlat", "Not al" - konuşarak bilgisayarınızı kontrol edin.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Workflow className="w-12 h-12 mb-4 text-purple-600" />
            <h3 className="text-xl font-bold mb-2">Otomasyon</h3>
            <p className="text-muted-foreground">
              Tekrar eden görevleri otomatikleştirin. Dosya organize et, backup al, script çalıştır.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Mail className="w-12 h-12 mb-4 text-green-600" />
            <h3 className="text-xl font-bold mb-2">Email Yönetimi</h3>
            <p className="text-muted-foreground">
              "Toplantı daveti gönder", "Faturaları kontrol et" - email'lerinizi AI ile yönetin.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <FileSpreadsheet className="w-12 h-12 mb-4 text-orange-600" />
            <h3 className="text-xl font-bold mb-2">Rapor Oluştur</h3>
            <p className="text-muted-foreground">
              Excel tabloları, PDF raporlar, veri analizi - hepsini konuşarak yapın.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Plug className="w-12 h-12 mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">Entegrasyonlar</h3>
            <p className="text-muted-foreground">
              Slack, Notion, Google Drive, Calendar - tüm araçlarınızla entegre çalışın.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <MessageSquare className="w-12 h-12 mb-4 text-indigo-600" />
            <h3 className="text-xl font-bold mb-2">Akıllı Asistan</h3>
            <p className="text-muted-foreground">
              Toplantı notları al, hatırlatıcı kur, araştırma yap - her şey doğal dilde.
            </p>
          </Card>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Kim Kullanabilir?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Herkes için tasarlandı
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8">
            <div className="mb-4">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">İş Profesyonelleri</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Verimliliği Artırın</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Toplantı notlarını otomatik özetle</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Email'leri AI ile yanıtla</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Rapor ve sunumları hızlıca hazırla</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 border-2 border-blue-600">
            <div className="mb-4">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Geliştiriciler</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Kodlamayı Hızlandırın</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Script ve kod yazdırın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Terminal komutlarını otomatikleştirin</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Dosya analizleri yapın</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8">
            <div className="mb-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Öğrenciler</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-4">Öğrenmeyi Kolaylaştırın</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Araştırma ve kaynak bulun</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Ödev ve proje yapın</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Notları organize edin</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            3 adımda başlayın
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">İndirin & Kurun</h3>
            <p className="text-muted-foreground">
              macOS, Windows veya Linux için ücretsiz indirin. Kurulum 1 dakika sürer.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Lisansınızı Aktive Edin</h3>
            <p className="text-muted-foreground">
              Ücretsiz hesap oluşturun, lisans key'inizi girin ve kullanmaya başlayın.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Konuşmaya Başlayın</h3>
            <p className="text-muted-foreground">
              Sesli veya yazılı komutlarla bilgisayarınızı kontrol edin. Bu kadar basit!
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Verimliliğinizi Artırmaya Hazır mısınız?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Binlerce kullanıcı zaten zamanlarını JamSheed AI ile kazanıyor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/download">
              <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                Ücretsiz İndirin
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/30 text-white w-full sm:w-auto">
                Planları İncele
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
