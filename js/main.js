/**
 * 3D Print Store - Main JavaScript
 * Handles all interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initNavigation();
    initMobileMenu();
    initProductDisplay();
    initFiltering();
    initLazyLoading();
    initSmoothScroll();
    initScrollEffects();
    initContactForm();
    addUTMParameters();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
            
            // Animate links
            links.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `fadeInUp 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
}

/**
 * Product display and rendering
 */
function initProductDisplay() {
    // Render products in each category section
    const categories = ['toys', 'home-decor', 'dragons', 'jewelry'];
    
    categories.forEach(category => {
        const gridElement = document.querySelector(`[data-category="${category}"]`);
        if (gridElement) {
            const categoryProducts = products.filter(p => p.category === category);
            renderProducts(categoryProducts, gridElement);
        }
    });
}

function renderProducts(productsToRender, container) {
    if (!container || productsToRender.length === 0) return;
    
    container.innerHTML = productsToRender.map(product => `
        <article class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%231a1a2e%22 width=%22400%22 height=%22300%22/%3E%3Ctext fill=%22%236366f1%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22%3E${encodeURIComponent(product.name)}%3C/text%3E%3C/svg%3E'"
                >
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <a 
                        href="${addUTMToLink(product.affiliateLink)}" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="btn-buy"
                        data-product-id="${product.id}"
                    >
                        Buy Now <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

/**
 * Product filtering functionality
 */
function initFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            filterProducts(filter);
        });
    });
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Lazy loading for images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || href.startsWith('#!')) return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll effects and animations
 */
function initScrollEffects() {
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .product-card, .category-card').forEach(el => {
        el.classList.add('fade-in-element');
        fadeObserver.observe(el);
    });
}

/**
 * Contact form handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());
            
            // Add UTM parameters if present
            data.utm_source = getUTMParameter('utm_source') || '';
            data.utm_medium = getUTMParameter('utm_medium') || '';
            data.utm_campaign = getUTMParameter('utm_campaign') || '';
            
            // Here you would typically send to a backend
            console.log('Form submission:', data);
            
            // Show success message
            showNotification('Thank you! Your message has been sent.', 'success');
            contactForm.reset();
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

/**
 * UTM parameter tracking
 */
function addUTMParameters() {
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    const urlParams = new URLSearchParams(window.location.search);
    
    // Store UTM parameters in sessionStorage
    utmParams.forEach(param => {
        if (urlParams.has(param)) {
            sessionStorage.setItem(param, urlParams.get(param));
        }
    });
}

function addUTMToLink(url) {
    try {
        const urlObj = new URL(url);
        const params = urlObj.searchParams;
        
        // Add stored UTM parameters
        ['utm_source', 'utm_medium', 'utm_campaign'].forEach(param => {
            const value = sessionStorage.getItem(param);
            if (value && !params.has(param)) {
                params.set(param, value);
            }
        });
        
        // Add default source if none present
        if (!params.has('utm_source')) {
            params.set('utm_source', '3dprintstore');
        }
        
        return urlObj.toString();
    } catch (e) {
        return url;
    }
}

function getUTMParameter(param) {
    return sessionStorage.getItem(param) || '';
}

/**
 * Load more products functionality
 */
const loadMoreButton = document.getElementById('load-more');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', () => {
        // This would typically load more products from an API
        // For now, just show a message
        showNotification('All products loaded!', 'info');
    });
}

/**
 * Performance optimization - debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * CSV Parser utility for loading products from CSV files
 */
function parseCSV(csvText) {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const products = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;
        
        const values = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const product = {};
        
        headers.forEach((header, index) => {
            product[header] = values[index] ? values[index].replace(/"/g, '').trim() : '';
        });
        
        products.push(product);
    }
    
    return products;
}

// Make functions available globally for CSV loading
window.loadProductsFromCSV = async function(url, callback) {
    try {
        const response = await fetch(url);
        const csvText = await response.text();
        const parsedProducts = parseCSV(csvText);
        
        if (callback && typeof callback === 'function') {
            callback(parsedProducts);
        }
        
        return parsedProducts;
    } catch (error) {
        console.error('Error loading CSV:', error);
        return [];
    }
};

console.log('3D Print Store initialized successfully!');
