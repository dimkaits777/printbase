const allProducts = {
    toys: [
        {
            title: "Cute Flexi Axolotl STL",
            desc: "Articulated model perfect for beginners. Window, Mac, Linux.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/02/24/Cute-Flexi-Axolotl-3D-Printing-143183121-1.png",
            link: "https://www.creativefabrica.com/product/cute-flexi-axolotl-stl-articulated-3d-print-model/ref/20531415/"
        },
        {
            title: "Articulated Clean Frog",
            desc: "A fun, bendy character to brighten your desk.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/08/18/Articulated-Clean-Frog-3D-Printing-128733407-1.png",
            link: "https://www.creativefabrica.com/product/articulated-clean-frog/ref/20531415/"
        },
        {
            title: "Cattle Animal Model",
            desc: "High-quality 3D model of a cow.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/10/18/Cattle-3D-Printing-133404900-1.png",
            link: "https://www.creativefabrica.com/product/cattle/ref/20531415/"
        },
        {
            title: "Capybara Planter - Pot",
            desc: "Functional animal planter pot for small succulents.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/02/11/Capybara-Planter-Animal-Plant-Pot-STL-3D-Printing-142228642-1.png",
            link: "https://www.creativefabrica.com/product/capybara-planter-animal-plant-pot-stl-3d-model-for-3d-print/ref/20531415/"
        },
        {
            title: "Cute Cartoon Puppy",
            desc: "Easy 3D printing suitable for kids' gifts.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/30/Cute-Cartoon-Puppy-3D-Printing-141284859-1.png",
            link: "https://www.creativefabrica.com/product/cute-cartoon-puppy-easy-3d-printing/ref/20531415/"
        },
        {
            title: "Kawaii Detective Capybara",
            desc: "Stylized detective figure.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/12/19/Kawaii-Detective-Capybara-3D-STL-Model-3D-Printing-138190179-1.jpg",
            link: "https://www.creativefabrica.com/product/kawaii-detective-capybara-3d-stl-model/ref/20531415/"
        },
        {
            title: "French Bulldog Karate",
            desc: "Funny martial arts pose dog model.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/10/29/Bulldog-Frances-Karate-3D-Printing-134284630-1.png",
            link: "https://www.creativefabrica.com/product/french-bulldog-28/ref/20531415/"
        },
        {
            title: "Stylish Bulldog Statue",
            desc: "Modern artistic bulldog head.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/18/Stylish-Bulldog-3D-Printing-145014072-1.png",
            link: "https://www.creativefabrica.com/product/stylish-bulldog/ref/20531415/"
        },
        {
            title: "Clay-Style Dog Sculpture",
            desc: "Unique aesthetic style dog model.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/30/ClayStyle-Dog-3D-Printing-145846723-1.png",
            link: "https://www.creativefabrica.com/product/clay-style-dog/ref/20531415/"
        }
        // Add more items here if needed...
    ],
    decor: [
        {
            title: "Trinket Dish - Jewelry Tray",
            desc: "Elegant tray for keeping rings and keys organized.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/23/Trinket-Dish-Jewelry-Tray-STL-3D-Printing-140744977-1-1.png",
            link: "https://www.creativefabrica.com/product/trinket-dish-jewelry-tray-stl/ref/20531415/"
        },
        {
            title: "Mini Donut Planter",
            desc: "Tiny desk decor planter shaped like a donut.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/28/Mini-Donut-Planter-STL-Tiny-Desk-Decor-3D-Printing-145762778-1-1.png",
            link: "https://www.creativefabrica.com/product/mini-donut-planter-stl-tiny-desk-decor/ref/20531415/"
        },
        {
            title: "Mini Macaron Planter",
            desc: "Sweet macaron shape for small plants.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/28/Mini-Macaron-Planter-STL-Desk-Decor-3D-Printing-145762531-1.png",
            link: "https://www.creativefabrica.com/product/mini-macaron-planter-stl-desk-decor/ref/20531415/"
        },
        {
            title: "Creative Planter Pot & Organizer",
            desc: "Multi-functional desk organizer and vase.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/04/07/Creative-planter-pot-Desk-organizer-STL-3D-Printing-146499291-1.jpg",
            link: "https://www.creativefabrica.com/product/creative-planter-pot-desk-organizer-stl/ref/20531415/"
        },
        {
            title: "Modern Ribbed Cup",
            desc: "Decorative cup with trendy ribbed texture.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/15/Modern-Ribbed-Desk-Organizer-Decorative-Cup-3D-Printing-140124148-1.png",
            link: "https://www.creativefabrica.com/product/modern-ribbed-desk-organizer-decorative-cup/ref/20531415/"
        },
        {
            title: "Book Planter (Succulent)",
            desc: "Succulent pot disguised as a book.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/10/30/Book-Planter-Succulent-Cactus-Pot-3D-Printing-134329976-1.png",
            link: "https://www.creativefabrica.com/product/book-planter-succulent-cactus-pot/ref/20531415/"
        }
    ],
    dragons: [
        {
            title: "Dragon Bookend",
            desc: "Heavy duty book end shaped like a dragon.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/11/18/Dragon-Bookend-3D-model-3D-Printing-135767817-1.jpg",
            link: "https://www.creativefabrica.com/product/dragon-bookend-3d-model/ref/20531415/"
        },
        {
            title: "Fantasy Dragon Egg Decor",
            desc: "Ornamental egg piece for mantel display.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/21/Fantasy-Easter-Dragon-Egg-Decor-STL-095-3D-Printing-140593206-1-1.png",
            link: "https://www.creativefabrica.com/product/fantasy-easter-dragon-egg-decor-stl-095/ref/20531415/"
        },
        {
            title: "Santa's Dragon",
            desc: "Christmas themed holiday dragon.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/11/25/Santas-Dragon-3D-Printing-136271774-1.png",
            link: "https://www.creativefabrica.com/product/santas-dragon/ref/20531415/"
        },
        {
            title: "Articulated Flower Dragon",
            desc: "Moving joints dragon with flower motifs.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/22/Articulated-Flower-Dragon-3D-Printing-140654887-1.png",
            link: "https://www.creativefabrica.com/product/articulated-flower-dragon/ref/20531415/"
        },
        {
            title: "Robot Dragon Bust",
            desc: "Sci-fi mechanical dragon head.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/12/10/Robot-Dragon-Bust-3D-Printing-137527336-1.png",
            link: "https://www.creativefabrica.com/product/robot-dragon-bust/ref/20531415/"
        },
        {
            title: "Kimono Dragon",
            desc: "Traditional Japanese art style dragon.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/12/23/Kimono-Dragon-3D-Printing-138470706-1.png",
            link: "https://www.creativefabrica.com/product/kimono-dragon/ref/20531415/"
        },
        {
            title: "Dragon Hatching",
            desc: "Baby dragon breaking out of shell.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/11/18/Dragon-Hatching-3D-model-3D-Printing-135768006-1.jpg",
            link: "https://www.creativefabrica.com/product/dragon-hatching-3d-model/ref/20531415/"
        }
    ],
    fashion: [
        {
            title: "Leopard Print Badge Reel",
            desc: "Personalized ID holder accessory.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/01/18/Leopard-Print-Badge-Reel-STL-3D-Printing-140336166-1.jpg",
            link: "https://www.creativefabrica.com/product/leopard-print-badge-reel-stl/ref/20531415/"
        },
        {
            title: "Heart Glasses Eyewear",
            desc: "Fun novelty heart-shaped frames.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/07/Heart-Glasses-Cute-3D-Printable-Eyewear-3D-Printing-144175795-1.jpg",
            link: "https://www.creativefabrica.com/product/heart-glasses-cute-3d-printable-eyewear/ref/20531415/"
        },
        {
            title: "Skincare 3D Mockup",
            desc: "Professional visual asset for designers.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/09/23/Skincare-3D-Mockup-Graphics-131408124-1.jpg",
            link: "https://www.creativefabrica.com/product/skincare-3d-mockup/ref/20531415/"
        },
        {
            title: "Round Glasses STL",
            desc: "Classic round eyewear design.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/07/Round-Glasses-STL-3D-Printable-Model-3D-Printing-144175934-1.jpg",
            link: "https://www.creativefabrica.com/product/round-glasses-stl-3d-printable-model/ref/20531415/"
        },
        {
            title: "Funny Party Spiral Glasses",
            desc: "Novelty prop glasses.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2026/03/09/Funny-Party-Spiral-Novelty-Glasses-3D-3D-Printing-144316265-1.jpg",
            link: "https://www.creativefabrica.com/product/funny-party-spiral-novelty-glasses-3d/ref/20531415/"
        },
        {
            title: "Realistic Perfume Bottle",
            desc: "Detailed perfume bottle asset.",
            img: "https://www.creativefabrica.com/wp-content/uploads/2025/11/10/Realistic-3D-Perfume-Model-Collection-Graphics-135133139-1.jpg",
            link: "https://www.creativefabrica.com/product/realistic-3d-perfume-model-collection/ref/20531415/"
        }
    ]
};