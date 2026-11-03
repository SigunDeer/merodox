// Merodox Website JavaScript Application
// Video verilerini dinamik olarak yükleme, arama ve kopyalama işlevleri

import videos from './videos.js';

// Helper: Video verilerini işleme
function renderVideos(filter = '') {
    const grid = document.getElementById('repo-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = videos.filter(v => {
        const matches = v.title.toLowerCase().includes(filter) ||
            v.repo.toLowerCase().includes(filter) ||
            v.category.toLowerCase().includes(filter);
        return matches;
    });

    // Draft (hazırlık aşaması) videoları en başa koy
    const drafts = filtered.filter(v => v.status === 'draft');
    const published = filtered.filter(v => v.status === 'published');
    const all = [...drafts, ...published];

    all.forEach(video => {
        const card = createVideoCard(video);
        grid.appendChild(card);
    });

    // Eğer hiç içerik yoksa boş durum mesajı göster
    if (all.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.innerHTML = `<p>Aradığınız kriterlere uygun içerik bulunamadı.</p>`;
        grid.appendChild(empty);
    }
}

function createVideoCard(video) {
    const article = document.createElement('article');
    article.className = `repo-card ${video.status === 'draft' ? 'draft' : ''}`;

    const badgeStatus = video.status === 'draft' ? 
        `<span class="video-badge upcoming">Video #${video.id} - Hazırlık Aşamasında</span>` :
        `<span class="video-badge">Video #${video.id}</span>`;

    const badgeLicense = `<span class="license-badge">${video.license} Lisansı</span>`;

    const trustIndicator = video.status === 'draft' ? 
        `<div class="info-block trust-notes">
            <div class="block-label"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> Doğrulama ve İnceleme Detayları</div>
            <ul class="trust-list">
                <li><strong>Kontrol Tarihi:</strong> ${video.reviewDate}</li>
                <li><strong>Kapsam:</strong> ${video.reviewScope}</li>
                <li><strong>Sınırlama:</strong> ${video.limitations}</li>
            </ul>
        </div>` :
        `<div class="info-block trust-notes">
            <div class="block-label"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg> Güvenilirlik ve Lisans</div>
            <ul class="trust-list">
                <li><strong>Repo Sahibi / Organizasyon:</strong> ${video.repo.split('/')[0]}</li>
                <li><strong>Lisans:</strong> ${video.license} Lisansı</li>
                <li><strong>Yıldız Sayısı:</strong> Resmî GitHub sayfasından kontrol edilir.</li>
            </ul>
        </div>`;

    const cardHTML = `
        <div class="card-header">
            <div class="card-tag-wrapper">
                ${badgeStatus}
                ${badgeLicense}
            </div>
        </div>

        <h3 class="repo-title">
            <a href="${video.repoUrl}" target="_blank" rel="noopener noreferrer">${video.repo}</a>
        </h3>

        <p class="repo-summary">
            ${video.title} — ${video.category} kategorisindeki araçlar için ${video.status === 'draft' ? 'hazırlık aşamasında' : 'test edilmiş'} kaynak.
        </p>

        <div class="info-block-group">
            <div class="info-block">
                <div class="block-label"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg> Kurulum Komutu</div>
                <div class="code-box">
                    <code id="cmd-${video.id}">${video.setupCommand}</code>
                    <button class="copy-btn" onclick="copyText('cmd-${video.id}', this)">Kopyala</button>
                </div>
                <span class="req-note">⚙️ Gereksinim: Node.js 22.13 veya üzeri.</span>
            </div>

            <div class="info-block">
                <div class="block-label"><svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg> Demo Prompt</div>
                <div class="code-box prompt-box">
                    <code id="prompt-${video.id}">${video.prompt}</code>
                    <button class="copy-btn" onclick="copyText('prompt-${video.id}', this)">Kopyala</button>
                </div>
                <span class="usage-tip">💡 İpucu: Prompt sonundaki <code>use context7</code> ifadesi yönlendirmeyi tetikler.</span>
            </div>
            ${trustIndicator}
        </div>

        <div class="card-footer">
            <a href="${video.repoUrl}" target="_blank" rel="noopener noreferrer" class="primary-link-btn">GitHub'da İncele ↗</a>
        </div>
    `;

    article.innerHTML = cardHTML;
    return article;
}

// Arama işlevi
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            renderVideos(query);
        });
    }
}

// Arama kutusu ekleme
function addSearchBar() {
    const main = document.querySelector('.main-content');
    if (!main) return;

    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.09 14 9.5 14c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5z"/></svg>
            <input type="text" id="search-input" placeholder="Repo veya video ara: Context7, Ollama, ..." />
        </div>
    `;
    main.insertBefore(searchContainer, main.firstChild);
}

// Kopyalama işlevi (önceki gibi)
function copyText(elementId, buttonEl) {
    const textElement = document.getElementById(elementId);
    if (!textElement) return;
    const textToCopy = textElement.innerText || textElement.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            showCopyFeedback(buttonEl);
        }).catch(err => {
            fallbackCopy(textToCopy, buttonEl);
        });
    } else {
        fallbackCopy(textToCopy, buttonEl);
    }
}

function fallbackCopy(text, buttonEl) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showCopyFeedback(buttonEl);
    } catch (e) {
        console.error('Kopyalama başarısız oldu:', e);
    }
    document.body.removeChild(textarea);
}

function showCopyFeedback(buttonEl) {
    if (!buttonEl) return;
    const originalText = buttonEl.innerText;
    buttonEl.innerText = 'Kopyalandı! ✓';
    buttonEl.classList.add('copied');
    setTimeout(() => {
        buttonEl.innerText = originalText;
        buttonEl.classList.remove('copied');
    }, 2000);
}

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    setupSearch();
    addSearchBar();
    console.log('Merodox web sitesi hazır. Dinamik içerik sistemi aktif.');
});
