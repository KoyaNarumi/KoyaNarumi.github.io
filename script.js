// script.js (現時点では空ですが、JavaScriptを追加する際に使用します)

document.addEventListener('DOMContentLoaded', () => {
    // 例: スムーズスクロール
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ここに他のJavaScriptコードを追加できます
});