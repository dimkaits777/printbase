# 3D Print Store

A professional, modern website for 3D printed products featuring toys, home decor, dragons, and jewelry. Built with clean HTML, CSS, and JavaScript for optimal performance and SEO.

## 🚀 Features

### Design
- **Modern Dark Theme** with beautiful gradient accents
- **Fully Responsive** - Mobile-first approach
- **Video Hero Banner** - Engaging visual experience
- **4 Product Categories**: Toys, Home Decor, Dragons, Jewelry & Fashion
- **Smooth Animations** - Glitch effects, fade-ins, hover states

### Functionality
- **Dynamic Product Loading** from JavaScript data structure
- **Category Filtering** - Filter products by category
- **Lazy Loading Images** - Optimized performance
- **Smooth Scrolling** - Enhanced user experience
- **Mobile Menu** - Hamburger navigation for mobile devices
- **Contact Form** - Ready for integration

### Integrations (Ready)
- **Pinterest Tag** - Commented and ready to activate
- **Google Analytics** - Commented and ready to activate
- **UTM Tracking** - Automatic parameter passing for affiliate links
- **Creative Fabrica** - Affiliate partner links throughout

### SEO & Performance
- **Meta Tags** - Complete SEO optimization
- **Open Graph Tags** - Social media sharing optimized
- **Schema.org Markup** - Structured data for search engines
- **Twitter Cards** - Enhanced Twitter sharing
- **Preloading** - Critical assets preloaded
- **Clean Code** - Semantic HTML5

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── products.js        # Product data
├── assets/
│   ├── images/            # Image files
│   │   └── products/      # Product images
│   └── video/             # Video files
│       └── hero-banner.mp4 # Hero video background
└── README.md              # This file
```

## 🛠️ Setup Instructions

### 1. Add Your Content

#### Images
Place your product images in `assets/images/products/`:
- `toy-dragon.jpg`
- `toy-robot.jpg`
- `decor-vase.jpg`
- etc. (update paths in `js/products.js`)

#### Video Banner
Add your hero video to `assets/video/hero-banner.mp4`

#### Poster Image
Add a fallback poster image to `assets/images/hero-poster.jpg`

### 2. Update Product Data

Edit `js/products.js` to add your products:

```javascript
{
    id: 'product-id',
    name: 'Product Name',
    category: 'toys|home-decor|dragons|jewelry',
    price: 19.99,
    description: 'Product description',
    image: 'assets/images/products/image.jpg',
    badge: 'Bestseller|New|Popular', // optional
    affiliateLink: 'https://your-affiliate-link.com'
}
```

### 3. Load Products from CSV (Optional)

The site includes a CSV parser. To use it:

1. Create a CSV file with columns: `id,name,category,price,description,image,badge,affiliateLink`
2. Use the `loadProductsFromCSV()` function in `main.js`

Example:
```javascript
loadProductsFromCSV('products.csv', (products) => {
    // Products loaded, update display
});
```

### 4. Activate Analytics

Uncomment and configure in `index.html`:

**Pinterest Tag:**
```html
<script>
pintrk('load', 'YOUR_PINTEREST_TAG_ID');
pintrk('page');
</script>
```

**Google Analytics:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 5. Update Contact Information

In `index.html`, update:
- Email address
- Business hours
- Social media links

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    --dark-bg: #0f0f1a;
    /* ... */
}
```

### Fonts
The site uses Google Fonts (Orbitron and Roboto). Change in `index.html` head section.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Checklist

- [x] Meta title and description
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Schema.org structured data
- [x] Canonical URL
- [x] Alt text for images
- [x] Semantic HTML5
- [x] Mobile-responsive
- [x] Fast loading (lazy loading, preloading)

## 📊 UTM Tracking

The site automatically tracks and passes UTM parameters:
- `utm_source`
- `utm_medium`
- `utm_campaign`

Parameters are stored in sessionStorage and added to all affiliate links.

## 🤝 Partner Integration

This site is designed for Creative Fabrica affiliate marketing:
- All product links include affiliate tracking
- UTM parameters automatically appended
- Partner disclosure in footer

## 📄 License

This template is provided as-is for your 3D printing business.

## 💡 Tips

1. **Optimize Images**: Compress all images before uploading
2. **Use WebP**: Consider WebP format with JPG fallbacks
3. **Video Size**: Keep hero video under 5MB for fast loading
4. **Test Links**: Verify all affiliate links work correctly
5. **Analytics**: Set up conversion tracking in Pinterest and Google Analytics

## 🆘 Support

For questions or issues:
1. Check browser console for errors
2. Verify file paths are correct
3. Ensure all dependencies load (Font Awesome, Google Fonts)

---

**Built with ❤️ for 3D printing enthusiasts**
