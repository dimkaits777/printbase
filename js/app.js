document.addEventListener('DOMContentLoaded', () => {
    const refId = 'ref/20531415/'; // ВАШ ID КРИЕТИВ ФАБРИКИ

    // Function to render products
    function renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '';
        
        products.forEach(product => {
            // Constructing clean affiliate link
            const baseUrl = product.link.split('/')[0] + '//' + product.link.split('/')[2];
            // Ensure URL ends with /
            let cleanUrl = product.link.trim();
            if(!cleanUrl.endsWith('/')) cleanUrl += '/';

            html += `
                <div class="product-card">
                    <img src="${product.img}" alt="${product.title}" class="prod-img" loading="lazy">
                    <div class="prod-body">
                        <span class="badge">License Included</span>
                        <h3 class="prod-title">${product.title}</h3>
                        <p class="prod-desc">${product.desc}</p>
                        <a href="${cleanUrl}" target="_blank" class="buy-btn">
                            CLICK HERE AND DOWNLOAD
                        </a>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }

    // Initialize Categories
    renderProducts(allProducts.toys, 'grid-toys');
    renderProducts(allProducts.decor, 'grid-decor');
    renderProducts(allProducts.dragons, 'grid-dragons');
    renderProducts(allProducts.fashion, 'grid-fashion');

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});