# Merodox - GitHub Pages Kaynak Sitesi

Bu depo, **Merodox** Instagram kanalı (`@merodox.ai`) için yayınlanan güvenilir ve test edilmiş open-source GitHub repoları, kurulum adımları, demo promptları ve güvenlik inceleme notlarını içerir.

---

## 🚀 GitHub Pages Yayınlama Adımları

Sitenizi GitHub Pages üzerinde ücretsiz ve sorunsuz şekilde canlıya almak için şu adımları izleyin:

### 1. Kodları GitHub Reposuna Gönderin (Push)
Depoyu GitHub hesabınızda bir depoya (örneğin `merodox` veya `merodox.ai`) gönderin:

```bash
git init
git add .
git commit -m "feat: initial release of Merodox source site with Video #1 Context7"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git
git push -u origin main
```

### 2. GitHub Pages Ayarını Etkinleştirin
1. GitHub'da reponuzun sayfasına gidin.
2. **Settings** (Ayarlar) sekmesine tıklayın.
3. Sol menüden **Pages** seçeneğine tıklayın.
4. **Build and deployment** başlığı altındaki **Source** kısmını **Deploy from a branch** olarak seçin.
5. **Branch** kısmında `main` (veya `master`) dalını ve klasör olarak `/ (root)` seçeneğini işaretleyip **Save** butonuna basın.

### 3. Yayın URL'si
Birkaç dakika içerisinde GitHub sitenizi yayınlayacaktır.
- Özel repo adı kullanıyorsanız URL: `https://<kullanici-adi>.github.io/<repo-adi>/`
- Repo adınız `<kullanici-adi>.github.io` ise URL: `https://<kullanici-adi>.github.io/`

---

## 📋 Güvenilirlik & Yayın İlkeleri

- **Doğrulanmış Bilgiler:** Sitede yalnızca resmî GitHub deposundan veya üretici dokümantasyonundan doğrulanan kurulum komutları ve lisanslar yer alır.
- **Dinamik Yıldız Sayısı:** Yıldız sayıları sabitleştirilmemiştir. Çekim ve yayın öncesi teyit edilmesi gerektiği belirtilmiştir.
- **Sıfır Bağımlılık:** Site pure HTML, CSS ve JS ile hazırlanmıştır. Dış CDN, reklam veya takip kodu içermez; hızlı ve mobil uyumludur.
- **Relative Pathing:** Tüm bağlantı ve kaynaklar göreli (`./`) tanımlanmıştır, GitHub Pages alt klasör yapılarında (`/<repo-adi>/`) kırılma yapmaz.

---

## 📽️ Mevcut Videolar & Repolar

- **Video #1: Context7 (`upstash/context7`)**
  - **Ne İş Yapar:** AI kodlama asistanlarına güncel kütüphane dokümanı sağlar.
  - **Kurulum:** `npx ctx7 setup` (Node.js 22.13+)
  - **Demo Prompt:** `Create a Next.js proxy that checks for a valid JWT in cookies and redirects unauthenticated users to /login. use context7`
  - **Lisans:** MIT
