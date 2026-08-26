// ================= Developer Credit Protocol =================
(function injectDeveloperCredit() {
    function createCreditElement() {
        const creditWrapper = document.createElement('div');
        creditWrapper.id = 'unoverse-developer-credit';
        creditWrapper.setAttribute('dir', 'ltr');
        
        creditWrapper.style.cssText = `
            position: relative;
            z-index: 9999;
            width: 100%;
            text-align: center;
            padding: 18px 0;
            background: transparent;
            border-top: 1px solid rgba(230, 225, 214, 0.08);
            margin-top: 30px;
            pointer-events: auto;
        `;

        creditWrapper.innerHTML = `
            <p style="
                font-family: 'Oswald', sans-serif;
                font-size: 11px;
                letter-spacing: 3px;
                color: #6B8096;
                text-transform: uppercase;
                margin: 0;
            ">
                DEVELOPED BY 
                <a href="https://www.instagram.com/omar_samehh._/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   style="
                       color: #E6E1D6;
                       font-weight: 700;
                       text-decoration: none;
                       border-bottom: 1px solid #E6E1D6;
                       padding-bottom: 2px;
                       margin-left: 4px;
                       cursor: pointer !important;
                       transition: color 0.3s ease, border-color 0.3s ease;
                   "
                   onmouseover="this.style.color='#FFD700'; this.style.borderColor='#FFD700';"
                   onmouseout="this.style.color='#E6E1D6'; this.style.borderColor='#E6E1D6';"
                >
                    OMAR SAMEH ✦
                </a>
            </p>
        `;

        // إدراج التوقيع داخل الفوتر إن وجد، أو في نهاية الصفحة
        const footer = document.querySelector('footer');
        if (footer) {
            const footerBottom = footer.querySelector('.footer-bottom');
            if (footerBottom) {
                footerBottom.appendChild(creditWrapper);
            } else {
                footer.appendChild(creditWrapper);
            }
        } else {
            const mainContainer = document.getElementById('adminPanel') || document.querySelector('.checkout-wrapper') || document.body;
            mainContainer.appendChild(creditWrapper);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createCreditElement);
    } else {
        createCreditElement();
    }
})();