/**
 * Merodox Astryx-Inspired Curation Platform Application
 */

import { videos } from './videos.js';

let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const gridEl = document.getElementById('repo-grid');
const countEl = document.getElementById('repo-count');
const emptyStateEl = document.getElementById('empty-state');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

// Modal Elements
const modalEl = document.getElementById('repo-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalCategory = document.getElementById('modal-category');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalSetup = document.getElementById('modal-setup');
const modalPrompt = document.getElementById('modal-prompt');
const modalReviewList = document.getElementById('modal-review-list');
const modalGithubLink = document.getElementById('modal-github-link');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('merodox_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('merodox_theme', newTheme);
        });
    }
}

// Render Repositories
function renderRepos() {
    if (!gridEl) return;

    gridEl.innerHTML = '';

    const filtered = videos.filter(repo => {
        const matchesCategory = currentCategory === 'all' || repo.category === currentCategory;
        const matchesSearch = repo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            repo.repo.toLowerCase().includes(searchQuery.toLowerCase()) ||
            repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            repo.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (countEl) {
        countEl.textContent = `${filtered.length} Repo`;
    }

    if (filtered.length === 0) {
        emptyStateEl.classList.remove('hidden');
        gridEl.classList.add('hidden');
        return;
    } else {
        emptyStateEl.classList.add('hidden');
        gridEl.classList.remove('hidden');
    }

    filtered.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card';

        card.innerHTML = `
            <div>
                <div class="card-top">
                    <div class="card-tags">
                        <span class="tag-category">${repo.category}</span>
                        <span class="tag-license">${repo.license}</span>
                    </div>
                    <span class="star-badge" title="GitHub Yıldızları">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                        ${repo.stars}
                    </span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">
                        <a href="${repo.repoUrl}" target="_blank" rel="noopener noreferrer">${repo.repo}</a>
                    </h3>
                    <p class="card-desc">${repo.description}</p>
                </div>
            </div>
            <div class="card-footer">
                <button class="card-btn btn-primary details-btn" data-id="${repo.id}">
                    Detaylar & Komutlar
                </button>
                <a href="${repo.repoUrl}" target="_blank" rel="noopener noreferrer" class="card-btn btn-secondary">
                    GitHub ↗
                </a>
            </div>
        `;

        // Detay butonu tetikleyicisi
        const detailsBtn = card.querySelector('.details-btn');
        detailsBtn.addEventListener('click', () => openModal(repo));

        gridEl.appendChild(card);
    });
}

// Modal Açma
function openModal(repo) {
    if (!modalEl) return;

    modalCategory.textContent = repo.category;
    modalTitle.textContent = repo.repo;
    modalDescription.textContent = repo.description;
    modalSetup.textContent = repo.setupCommand;
    modalPrompt.textContent = repo.prompt;
    modalGithubLink.href = repo.repoUrl;

    modalReviewList.innerHTML = `
        <li><strong>Neden Seçildi:</strong> ${repo.whyToUse}</li>
        <li><strong>Kontrol Tarihi:</strong> ${repo.reviewDate}</li>
        <li><strong>Kontrol Kapsamı:</strong> ${repo.reviewScope}</li>
        <li><strong>Sınırlamalar:</strong> ${repo.limitations}</li>
    `;

    modalEl.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Modal Kapatma
function closeModal() {
    if (!modalEl) return;
    modalEl.classList.add('hidden');
    document.body.style.overflow = '';
}

// Setup Event Listeners
function initListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderRepos();
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            currentCategory = btn.getAttribute('data-category');
            renderRepos();
        });
    });

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            currentCategory = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            filterBtns.forEach(b => {
                b.classList.remove('active');
                if (b.getAttribute('data-category') === 'all') {
                    b.classList.add('active');
                    b.setAttribute('aria-selected', 'true');
                }
            });
            renderRepos();
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalEl) {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) {
                closeModal();
            }
        });
    }

    // ESC tuşu ile modal kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Global Kopyalama Fonksiyonu (Modal İçin)
window.copyModalText = function(elementId, buttonEl) {
    const codeEl = document.getElementById(elementId);
    if (!codeEl) return;
    const text = codeEl.textContent || codeEl.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonEl.textContent;
        buttonEl.textContent = 'Kopyalandı! ✓';
        buttonEl.classList.add('copied');
        setTimeout(() => {
            buttonEl.textContent = originalText;
            buttonEl.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Kopyalama hatası:', err);
    });
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderRepos();
    initListeners();
    console.log('Merodox Astryx-Inspired Platform yüklendi.');
});
