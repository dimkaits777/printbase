/**
 * 3D Print Store - Products Data
 * Sample products for all categories
 * Ready to be populated from CSV files
 */

const products = [
    // Toys Category
    {
        id: 'toy-001',
        name: 'Articulated Dragon Toy',
        category: 'toys',
        price: 12.99,
        description: 'Flexible articulated dragon that moves and poses. Perfect for kids and collectors.',
        image: 'assets/images/products/toy-dragon.jpg',
        badge: 'Bestseller',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'toy-002',
        name: 'Robot Action Figure',
        category: 'toys',
        price: 15.99,
        description: 'Poseable robot figure with multiple articulation points and accessories.',
        image: 'assets/images/products/toy-robot.jpg',
        badge: 'New',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'toy-003',
        name: 'Dinosaur Skeleton Kit',
        category: 'toys',
        price: 18.99,
        description: 'Educational build-your-own dinosaur skeleton. Great STEM learning toy.',
        image: 'assets/images/products/toy-dino.jpg',
        badge: '',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'toy-004',
        name: 'Puzzle Cube Set',
        category: 'toys',
        price: 9.99,
        description: 'Challenging 3D puzzle cubes in various difficulty levels.',
        image: 'assets/images/products/toy-puzzle.jpg',
        badge: 'Popular',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    
    // Home Decor Category
    {
        id: 'decor-001',
        name: 'Geometric Vase',
        category: 'home-decor',
        price: 24.99,
        description: 'Modern geometric vase perfect for flowers or as a standalone piece.',
        image: 'assets/images/products/decor-vase.jpg',
        badge: 'Bestseller',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'decor-002',
        name: 'Lithophane Lamp',
        category: 'home-decor',
        price: 29.99,
        description: 'Custom photo lithophane lamp that reveals images when lit.',
        image: 'assets/images/products/decor-lamp.jpg',
        badge: 'Custom',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'decor-003',
        name: 'Wall Art Panels',
        category: 'home-decor',
        price: 34.99,
        description: 'Set of decorative wall panels with intricate 3D patterns.',
        image: 'assets/images/products/decor-wall.jpg',
        badge: '',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'decor-004',
        name: 'Plant Holder Stand',
        category: 'home-decor',
        price: 19.99,
        description: 'Elegant plant holder with modern design for indoor plants.',
        image: 'assets/images/products/decor-plant.jpg',
        badge: 'New',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    
    // Dragons Category
    {
        id: 'dragon-001',
        name: 'Sleeping Dragon Figurine',
        category: 'dragons',
        price: 27.99,
        description: 'Detailed sleeping dragon figurine with scales and wings.',
        image: 'assets/images/products/dragon-sleep.jpg',
        badge: 'Bestseller',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'dragon-002',
        name: 'Flying Dragon Statue',
        category: 'dragons',
        price: 32.99,
        description: 'Majestic flying dragon with spread wings and dynamic pose.',
        image: 'assets/images/products/dragon-fly.jpg',
        badge: 'Popular',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'dragon-003',
        name: 'Baby Dragon Collection',
        category: 'dragons',
        price: 22.99,
        description: 'Set of adorable baby dragon figurines in various poses.',
        image: 'assets/images/products/dragon-baby.jpg',
        badge: 'Set',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'dragon-004',
        name: 'Dragon Head Bust',
        category: 'dragons',
        price: 39.99,
        description: 'Large detailed dragon head bust for display. Museum quality.',
        image: 'assets/images/products/dragon-bust.jpg',
        badge: 'Premium',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    
    // Jewelry & Fashion Category
    {
        id: 'jewelry-001',
        name: 'Geometric Pendant Necklace',
        category: 'jewelry',
        price: 16.99,
        description: 'Modern geometric pendant on adjustable chain. Multiple colors available.',
        image: 'assets/images/products/jewelry-pendant.jpg',
        badge: 'New',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'jewelry-002',
        name: 'Lattice Bracelet',
        category: 'jewelry',
        price: 14.99,
        description: 'Intricate lattice pattern bracelet. Lightweight and comfortable.',
        image: 'assets/images/products/jewelry-bracelet.jpg',
        badge: '',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'jewelry-003',
        name: 'Dragon Scale Earrings',
        category: 'jewelry',
        price: 12.99,
        description: 'Unique dragon scale pattern earrings. Fantasy-inspired design.',
        image: 'assets/images/products/jewelry-earrings.jpg',
        badge: 'Popular',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    },
    {
        id: 'jewelry-004',
        name: 'Parametric Ring',
        category: 'jewelry',
        price: 18.99,
        description: 'Mathematically generated parametric ring design. Custom sizing available.',
        image: 'assets/images/products/jewelry-ring.jpg',
        badge: 'Custom',
        affiliateLink: 'https://www.creativefabrica.com/3d-printing/ref/20531415/'
    }
];

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}
