# Merodox – İlk 5 Repo Araştırması ve Video #1 Senaryosu

Nov 3, 2026 · @Meta

## Özet: ilk 5 repo ve sıra

İlk video için Context7'yi öneriyorum: Windows'ta da çalışır, sonucu 10 saniyede ekranda görünür ve proje kurumsal destekli. Aşağıdaki 5 repo kontrol listesinden geçti; yıldız sayıları yaklaşık, çekimden önce GitHub'dan teyit edilecek.

| Sıra | Repo | Yıldız (yaklaşık) | Lisans | Ne yapıyor | Platform |
| --- | --- | --- | --- | --- | --- |
| 1 | [upstash/context7](https://github.com/upstash/context7) | 63,9 bin (GitHub'dan okundu, 3 Kasım 2026) | MIT | Yapay zekâ kodlama asistanına güncel kütüphane dokümanını verir | Windows, macOS, Linux (Node.js 22.13+) |
| 2 | [ollama/ollama](https://github.com/ollama/ollama) | 170 bin+ (2026 başı, ikincil kaynak) | MIT | Yapay zekâ modellerini kendi bilgisayarında tek komutla çalıştırır | Windows, macOS, Linux |
| 3 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | \~150 bin (Ağustos 2026, ikincil kaynak) | Özel "Open WebUI License" (OSI onaylı değil) | Ollama için ChatGPT benzeri yerel arayüz | Docker veya pip, tarayıcıdan |
| 4 | [perplexityai/bumblebee](https://github.com/perplexityai/bumblebee) | \~4,8 bin (Temmuz 2026, ikincil kaynak) | Apache-2.0 | Geliştirici bilgisayarındaki paket, eklenti ve MCP ayarlarını zararlı bulaşma riskine karşı tarar | Yalnızca macOS ve Linux |
| 5 | [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | \~147 bin (Temmuz 2026, tek kaynak, teyit şart) | AGPL-3.0 | Web sitelerini yapay zekâya hazır markdown veriye çevirir | API veya kendi sunucunda |

Bumblebee Windows'ta çalışmadığı için demo çekemeyeceğiz; WSL ile denenebilir ama ilk haftaya bırakmayalım. Open WebUI ve Ollama aynı seride, art arda iki video olarak çekilebilir.

## Repo kartları

Her kartta güvenlik kontrolünün sonucu, kamerada söyleyebileceğin heyecanlı bir cümle ve demo fikri var. "Teyit" yazan yerleri çekimden önce GitHub sayfasında kendin kontrol et.

### 1. Context7 (upstash)

- **Güven:** MIT lisans, 63,9 bin yıldız, 3,2 bin fork, 1.107 commit, güvenlik politikası dosyası var, 16 açık issue. Sahibi Upstash, tanınan bir şirket.
- **Dürüst not:** Repo MCP sunucusunun kodunu içeriyor; doküman indeksleyen arka uç kapalı kaynak. Videoda "tamamen açık" deme.
- **Kurulum:** `npx ctx7 setup` (Node.js 22.13 veya üstü). Daha yüksek limit için ücretsiz API anahtarı öneriliyor.
- **Söylenecek cümle:** "Yapay zekâ sana bir yıl eski kod yazıyor ve olmayan fonksiyonlar uyduruyor. Bu repo, promptun sonuna iki kelime ekleyince onu güncel dokümana bağlıyor."
- **Demo:** Aynı promptu önce Context7'siz, sonra sonuna `use context7` ekleyerek çalıştır; iki cevabı yan yana göster.

### 2. Ollama

- **Güven:** MIT lisans, 170 bin+ yıldız, ayda milyonlarca indirme bildiriliyor (teyit). Yerel yapay zekânın fiili standardı.
- **Kurulum:** Resmî kurucuyu ollama.com'dan indir; modeli `ollama pull <model>` ile çek. Rastgele "hızlandırıcı" paketler kurma.
- **Söylenecek cümle:** "İnternet yok, abonelik yok, bu cümleyi yazan yapay zekâ şu an benim bilgisayarımda çalışıyor."
- **Demo:** İnterneti kapatıp terminalde modelle sohbet et. Bu kare güçlü bir kanca olur.

### 3. Open WebUI

- **Güven:** \~150 bin yıldız, son commit Temmuz 2026, 12 ayda yaklaşık 5.000 commit, aktif bakım. Ollama'nın en yaygın arayüzü.
- **Dikkat:** Lisans MIT veya BSD değil, özel bir lisans. 50 kullanıcıyı aşan dağıtımlarda marka şartı var; kişisel kullanımda sorun yok ama "tamamen açık kaynak" deme. Haftalık sürümler bazen ayarları bozabiliyor.
- **Söylenecek cümle:** "Kendi ChatGPT'ni kur: dosyalarını yükle, ona sor, hiçbir veri dışarı çıkmasın."
- **Demo:** Bir PDF yükle, soru sor. Ollama videosunun devamı olarak çek.

### 4. Bumblebee (Perplexity)

- **Güven:** Apache-2.0, Go ile yazılmış, tek ikili dosya, sadece okuma yapar. Perplexity güvenlik ekibinin iç aracı, 22 Mayıs 2026'da açıldı. Henüz v0.1.x, yani genç bir proje.
- **Sahte kopya riski:** Aramalarda aynı adlı fork'lar çıkıyor. Yalnızca `perplexityai/bumblebee` adresini kullan.
- **Platform:** macOS ve Linux. Windows demo için WSL gerekir, bu yüzden ilk sıraya koymadım.
- **Söylenecek cümle:** "MCP sunucusu kurmadan önce bilgisayarında zaten zararlı bir paket var mı, 10 saniyede bakıyor."

### 5. Firecrawl

- **Güven:** Kurumsal destekli, aktif sürümler (v2.11.0, Haziran 2026), yaklaşık 388 açık issue, yıldız sayısı kaynaklarda tutarsız (teyit).
- **Lisans:** AGPL-3.0. Kendi sunucuna kurup değiştirirsen kodu paylaşman gerekir; videoda bunu tek cümleyle söyle.
- **Söylenecek cümle:** "Yapay zekâ internete bakıyor ama sayfalar çöp dolu. Bu repo bir siteyi temiz markdown'a çeviriyor."
- **Demo:** Kalabalık bir haber sayfasının ham halini ve çıktıdaki temiz halini göster.

## Elenenler ve yedek liste

Trend listelerinde çok repo çıkıyor ama üçünü bilerek elemek, kanalın "güvenilir repo" vaadini taşıyor.

| Aday | Neden elendi |
| --- | --- |
| tinyhumansai/openhuman | Takvim, e-posta, belge ve tarama geçmişi için OAuth erişimi istiyor. Trend olması güven demek değil; videoda tanıtmak izleyiciyi riske sokar. |
| firecrawl/anydoc | Ağustos 2026'da açılmış, iki haftada 17 bin yıldız toplamış. Projenin kendisi ciddi görünüyor ama "en az 3 ay yaşamış repo" kuralımıza uymuyor. Kural dolunca yeniden bakılır. |
| Aynı adlı kopyalar (ör. context7 ve bumblebee isimli fork'lar) | Arama sonuçlarında 0 yıldızlı yansılar ve fork'lar çıkıyor. Link her zaman resmî organizasyona gitmeli: `upstash`, `perplexityai`, `ollama`, `open-webui`, `firecrawl`. |

**Yedek repolar** (sonraki haftalar için, hepsi kurumsal destekli veya çok yıldızlı, çekimden önce kontrol edilecek):

- n8n: iş akışı otomasyonu. Lisansı "fair-code" (kaynak açık ama ticari kısıtlı), yani videoda "açık kaynak" yerine bunu söyle.
- llama.cpp: yerel yapay zekâyı çalıştıran motor.
- Dify: yapay zekâ uygulaması kurma platformu.
- ComfyUI: görsel üretim için düğüm tabanlı arayüz.

## Video #1 senaryosu: Context7 (yaklaşık 38 saniye)

Kamera karşısındaki bölümler kısa tutuldu; demo ve kurulum ses kaydıyla ekran kaydının üstüne gelecek. Metni ezberleme: sütundaki "anahtar cümle"yi kendi ağzınla, heyecanla söyle, gerisini doğaçla.

| Süre | Görüntü | Anahtar cümle ve enerji notu |
| --- | --- | --- |
| 0-3 sn | **Kamera, tam ekran** (yeşil perde, kafa-omuz) | "Yapay zekâ sana bir yıl eski kod yazıyor ve bunu fark etmiyorsun!" Kaşları kaldır, hızlı ve yüksek enerjiyle başla; selam verme, direkt gir. |
| 3-10 sn | **Kamera, sağ üstte küçük; arkada "eski kod / hata" görseli** | "Olmayan fonksiyonlar uyduruyor, eski sürümün yazımını veriyor. Bunu çözen bir repo buldum ve inanılmaz basit." Ses tonu merakla yükselsin. |
| 10-25 sn | **Ekran kaydı tam ekran + ses kaydı** | Aynı promptu iki kez çalıştır. Önce normal, sonra sonuna `use context7` ekle. "Bak, şimdi sonuna sadece iki kelime ekliyorum... ve fark ortada!" Gerçek çıktıyı kaydet, sonucu önceden vaat etme. |
| 25-33 sn | **Ekran kaydı: terminal + ses kaydı** | "Kurulumu tek komut: `npx ctx7 setup`. Node.js 22.13 veya üstü yeterli, ücretsiz." Komutu yazarken yavaş, net konuş. |
| 33-38 sn | **Kamera, tam ekran** | "Repo linki ve kopyalayabileceğin prompt sitemde, bio'daki link. Sıradaki repo için takipte kal!" Gülümseyerek bitir, son kareyi 0,5 sn tut. |

**Demo promptu** (resmî README'deki örnek, kendi dilinde aynen kullanabilirsin):

```
Create a Next.js proxy that checks for a valid JWT in cookies
and redirects unauthenticated users to `/login`. use context7
```

**Kendi sesinle söyleyeceğin kısa araştırma notları** (heyecan, ezber değil):

- Context7, kütüphanenin sürüme özel güncel dokümanını ve örneklerini promptuna ekler; yapay zekâ eski eğitim verisine takılmaz.
- Cursor, Claude Code, VS Code gibi onlarca araçta çalışır.
- Kendi hesabından ücretsiz API anahtarı alınca limitler artar.
- Kütüphane eklemek isteyen herkes Context7'ye başvurabilir; bu yüzden listedeki dokümanların hepsi doğrulanmış değildir. Repo sayfası bunu kendisi söylüyor. Bunu "dürüst not" olarak bir cümleyle ekle, kanalın güvenilirlik vaadi buradan gelir.

**Sitedeki sayfa içeriği (video #1):** repo bağlantısı, demo promptu, kurulum komutu, "neden güvenilir" kısa kartı (MIT, 63,9 bin yıldız, resmî organizasyon).

## Çekim planı: yeşil perde, ışık, mikrofon

Günde 2 video için en verimli yol, kamera bölümlerini haftada bir gün toplu çekmek; demo ve ses kayıtlarını bilgisayarda hafta içi yapmak.

**Telefon (Galaxy S9+) ayarları**

1. Arka kamerayı kullan, dikey çek, tripoda sabitle. Kadrajı bir kez ayarla, çekim günü boyunca değiştirme.
2. Çözünürlük 1080p, 30 kare. S9+ uzun çekimde ısınabilir; kısa takelerle ilerle ve hafızayı boşalt.
3. Pozlama ve odağı kilitle (ekrana uzun bas). Aksi halde ışık değişince parlaklık oynar.
4. Telefonu uçuş moduna al, bildirimleri kapat.

**Yeşil perde ve ışık**

1. Perdeyi buruşuksuz ger. Kıvrım, gölge demek; gölge, kötü maskeleme demek.
2. Kendini perdeden en az 1-1,5 metre uzağa koy, yoksa yeşil yansıması yüzüne ve saçına vurur.
3. Perdeyi ayrı bir ışıkla eşit aydınlat, seni ise önden ve hafif yandan. Yeşil giysi, yeşil gözlük çerçevesi giyme.
4. Önce 10 saniyelik bir deneme çek, bilgisayarda yeşil perdeyi kaldırıp saç kenarına bak; sorun varsa ışığı düzeltip öyle devam et.

**Yaka mikrofonu**

1. S9+ 3,5 mm kulaklık girişine sahip. Mikrofonun fişi 4 halkalı (TRRS) olmalı; 3 halkalı (TRS) ise telefonda çalışmaz, bu durumda mikrofonu bilgisayara takıp sesi orada kaydet.
2. Mikrofonu göğüs hizasına, ağızdan yaklaşık bir karış uzağa tak; kabloyu gömleğin altından geçir.
3. Ses kaydını sessiz, halılı veya yorganlı bir odada yap; yankı sesin kalitesini düşürür.
4. Her çekimde ilk 5 saniyeyi dinle, ses gelmiyorsa o an düzelt.

**Haftalık ritim (günde 2 video, haftada 10 video)**

| Gün | İş |
| --- | --- |
| Pazar | 10 videonun kamera bölümleri (giriş ve kapanış) toplu çekim, 2-3 saat |
| Pazartesi-Cuma, sabah | Ertesi günün 2 reposunu araştır, ben senaryoyu hazırlarım |
| Pazartesi-Cuma, akşam | Ekran kaydı, ses kaydı, kurgu (şablon projeden), sitedeki sayfayı ekle |
| Her gün | 2 videoyu yükle, ilk saatte yorumlara cevap ver |

Bu ritim ilk 2 hafta için hedef; sürdürülemezse günde 1 videoya inip kaliteyi korumak daha doğru. Kurgu şablonunu (CapCut masaüstü sürümünde yeşil perde, altyazı ve geçişler) bir sonraki adımda birlikte kurarız.

## Caption ve hashtag (video #1)

Caption kısa, ilk satır kancayı tekrar eder, son satır kaydetmeye ve takibe çağırır.

```
Yapay zekâ sana eski kod yazıyor mu? 👀
Promptunun sonuna "use context7" ekle, güncel dokümanla yazsın.

Kurulum: npx ctx7 setup
Repo linki ve demo promptu bio'daki sitemde.

Sonra bakmak için kaydet 🔖 ve her gün yeni, kontrol edilmiş repolar için takipte kal.
```

Hashtag için 5-8 tane yeter: `#github` `#yapayzeka` `#yazilim` `#kodlama` `#opensource` `#mcp` `#vibecoding` `#yazilimci`. Her videoda ilk üçü sabit, kalanı konuya göre değişsin.

## Çekimden önce teyit listesi ve sıradaki adımlar

Bu belgedeki yıldız sayılarının çoğu ikincil kaynaklardan; çekimden önce şu maddeleri işaretle:

- [ ] Her repo için GitHub sayfasında yıldız, lisans ve son commit tarihine bak (son 3 ay içinde olmalı)
- [ ] Terminalde `node -v` çalıştır, sürüm 22.13 veya üstü mü kontrol et
- [ ] `npx ctx7 setup` komutunu çekimden önce bir kez dene; hata alırsan videoya almadan çöz
- [ ] Demo promptunu Context7'li ve Context7'siz çalıştırıp gerçek çıktıları kaydet
- [ ] Ollama ve Open WebUI videosu için kurucuları yalnızca resmî sitelerinden indir
- [ ] Instagram kullanıcı adı ve alan adı müsaitliğine bak (Merodox veya MertK)

**Sıradaki adım:** Senden kanal adı kararını ve kurguda hangi programı kullanacağını (CapCut masaüstü önerim) öğrenince, kurgu şablonunu ve GitHub Pages sitesinin iskeletini hazırlarım.

### Kaynaklar

Sayfası doğrudan açılıp okunan: [upstash/context7 GitHub sayfası](https://github.com/upstash/context7) (3 Kasım 2026).

Arama sonuçlarındaki özetlerden alınan (tam sayfa açılmadı, yaklaşık kabul et): [Ollama yıldız sayısı, fast.io](https://www.fast.io/resources/best-open-source-ai-tools-2026.md) · [Open WebUI lisans ve yıldız, PromptQuorum](https://www.promptquorum.com/local-llms/open-webui-review) · [Open WebUI bakım durumu, IdeaProof](https://ideaproof.io/open-source/project/open-webui) · [Bumblebee tanıtımı, AlphaSignal](https://alphasignalai.substack.com/p/perplexitys-bumblebee-a-read-only) · [Bumblebee yıldız güncellemesi](https://pasqualepillitteri.it/news/3265/perplexity-bumblebee-open-source-supply-chain-scanner-2026) · [Firecrawl künyesi, dev.co](https://dev.co/ai/frameworks/firecrawl) · [Firecrawl anydoc incelemesi, DEV](https://dev.to/andrew-ooo/anydoc-review-14-document-formats-to-markdown-in-4ms-1lae) · [OpenHuman izin bilgisi, ToolBrain](https://toolbrain-astro.pages.dev/blog/github-trending-repos-week-may-16-2026/) · [n8n lisansı, resmî dokümantasyon](https://docs.n8n.io/privacy-and-security/sustainable-use-license)
