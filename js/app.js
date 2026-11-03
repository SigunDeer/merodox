/**
 * Merodox Website JavaScript Application
 * Text copy handling and dynamic repo rendering helper
 */

/**
 * Text copy function with smooth UI feedback
 * @param {string} elementId - ID of the element containing text to copy
 * @param {HTMLButtonElement} buttonEl - Button element that was clicked
 */
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

/**
 * Fallback copy method for older browser environments
 */
function fallbackCopy(text, buttonEl) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
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

/**
 * UI Feedback for copy button
 */
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

// Log initial ready status
document.addEventListener('DOMContentLoaded', () => {
    console.log('Merodox web sitesi hazır. GitHub Pages uyumlu statik mod aktif.');
});
