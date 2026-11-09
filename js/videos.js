// Merodox Curated Repositories Dataset
export const videos = [
  {
    id: 1,
    repo: "upstash/context7",
    title: "Context7",
    category: "AI Kodlama Araçları",
    license: "MIT",
    status: "draft",
    stars: "64k+",
    description: "AI kodlama asistanlarına sürüme özel güncel kütüphane dokümantasyonu ve kod örnekleri sağlar.",
    setupCommand: "npx ctx7 setup",
    prompt: "Create a Next.js proxy that checks for a valid JWT in cookies and redirects unauthenticated users to `/login`. use context7",
    repoUrl: "https://github.com/upstash/context7",
    reviewDate: "3 Kasım 2026",
    reviewScope: "Resmî GitHub deposu, lisans belgesi ve kurulum adımları.",
    limitations: "Bağımsız güvenlik denetimi değildir. Arka plan indeksleme sunucuları Upstash bulutunda çalışır.",
    whyToUse: "Kod yazarken uydurulan API fonksiyonlarını ve eski doküman hatalarını engeller."
  },
  {
    id: 2,
    repo: "ollama/ollama",
    title: "Ollama",
    category: "Yerel AI",
    license: "MIT",
    status: "published",
    stars: "170k+",
    description: "Kendi bilgisayarınızda internete ihtiyaç duymadan büyük dil modellerini tek komutla çalıştırın.",
    setupCommand: "ollama run llama3",
    prompt: "Lokal olarak çalışan modelinle Python FastAPI kullanarak basit bir REST API uç noktası yaz.",
    repoUrl: "https://github.com/ollama/ollama",
    reviewDate: "3 Kasım 2026",
    reviewScope: "Resmî ollama.com ve GitHub deposu incelemesi.",
    limitations: "GPU VRAM kapasitesi büyük modellerin çalıştırılmasında performans belirleyicidir.",
    whyToUse: "Veri gizliliği sağlar ve internet bağlantısı olmadan tam kontrol sunar."
  },
  {
    id: 3,
    repo: "open-webui/open-webui",
    title: "Open WebUI",
    category: "Yerel Arayüz",
    license: "Özel Lisans",
    status: "published",
    stars: "150k+",
    description: "Ollama ve diğer LLM sağlayıcıları için ChatGPT benzeri zengin özellikli yerel web arayüzü.",
    setupCommand: "docker run -d -p 3000:8080 --name open-webui --restart always ghcr.io/open-webui/open-webui:main",
    prompt: "Open WebUI üzerinde özel sistem promptları ve RAG belgeleri nasıl tanımlanır?",
    repoUrl: "https://github.com/open-webui/open-webui",
    reviewDate: "3 Kasım 2026",
    reviewScope: "Resmî Docker ve pip kurulum yönergeleri.",
    limitations: "Özel lisans koşulları 50+ kullanıcı barındıran ticari dağıtımlarda marka/koşul şartları içerir.",
    whyToUse: "Yerel LLM'leri tarayıcı üzerinden şık ve gelişmiş bir arayüzle yönetmenizi sağlar."
  },
  {
    id: 4,
    repo: "firecrawl/firecrawl",
    title: "Firecrawl",
    category: "Otomasyon & Veri",
    license: "AGPL-3.0",
    status: "published",
    stars: "147k+",
    description: "Web sitelerini yapay zeka uygulamaları için temiz markdown formatına dönüştüren güçlü araç.",
    setupCommand: "npx firecrawl-cli scrape <url>",
    prompt: "Hedef bir web sitesinin içeriğini LLM için temiz markdown olarak çek ve özetle.",
    repoUrl: "https://github.com/firecrawl/firecrawl",
    reviewDate: "3 Kasım 2026",
    reviewScope: "Resmî GitHub deposu ve API dokümantasyonu.",
    limitations: "AGPL-3.0 lisansı gereği kendi sunucunuzda değiştirip sunuyorsanız kaynak kodunu paylaşmanız gerekir.",
    whyToUse: "Karmaşık HTML yapılarıyla uğraşmadan web verilerini doğrudan LLM dostu formata çevirir."
  }
];

export default videos;
