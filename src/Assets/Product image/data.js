import product1 from '../Real-product/beige.JPG';
import product2 from '../Real-product/bright cream.JPG';
import product3 from '../Real-product/bright yellow.JPG';
import product4 from '../Real-product/Brown.JPG';
import product5 from '../Real-product/coffe brown.JPG';
import product6 from '../Real-product/cream.JPG';
import product7 from '../Real-product/Dark blue patterned.JPG';
import product8 from '../Real-product/dark blue.JPG';
import product9 from '../Real-product/dark brown.JPG';
import product10 from '../Real-product/dark cream.JPG';
import product11 from '../Real-product/dark sage.JPG';
import product12 from '../Real-product/light blue.JPG';
import product13 from '../Real-product/light red.JPG';
import product14 from '../Real-product/light sage.JPG';
import product15 from '../Real-product/olive.JPG';
import product16 from '../Real-product/orange.JPG';
import product17 from '../Real-product/yellow and brown.JPG';
import product18 from '../Real-product/yellow sun.JPG';


export const navigation = [
    {
        name: 'home',
        href: '/',
    },
    {
        name: 'shop',
        dropdown: [
            { name: 'my account', href: '/my-account' },
            { name: 'backdrops', href: '/backdrops' },
            { name: 'rental', href: '/rental' },
            { name: 'Backdrop', href: '/Backdrop' },
            { name: 'double sided', href: '/double-sided' },
        ],
    },
    {
        name: 'digital backdrops',
        href: '/digital-backdrops',
    },
    {
        name: 'journal',
        href: '/journal',
    },
    {
        name: 'about',
        href: '/about',
    },
    {
        name: 'contact',
        href: '/contact',
    },
];

export const filterData = [
    {
        name: 'Size',
        options: ['Large', 'Medium', 'Small'],
    },
    {
        name: 'Texture',
        options: ['Low', 'Mid', 'Strong', 'Gradient', 'Grainy', 'Scenic', 'Swirls'],
    },
    {
        name: 'Color',
        options: ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Black', 'White'],
    },
];

export const products = [
    {
        id: 1,
        name: "Rodeo Dust Painted Canvas Backdrop (SN#100)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Patchment brown",
        size: "Large",
        texture: "Solid",
        image: product1, // Main product image
        additionalImages: [
            './photo-1565791380713-1756b9a05343.avif',
            './photo-1513135724701-30343e546328.avif',
            './photo-1537204319452-fdbd29e2ccc7.avif',
        ],
        inStock: true,
        description: "Experience the beauty of the Rodeo Dust backdrop with its unique textures and rich blue tones. Perfect for any themed photoshoot or event.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 2,
        name: "Clay Light Painted Canvas Backdrop (SN#102)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Cream",
        size: "Medium",
        texture: "Solid",
        image: product2,
        inStock: true,
        description: "The Clay Light backdrop features soft hues that complement any scene. Ideal for portrait photography and artistic displays.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 3,
        name: "Yellow Cat Painted Canvas Backdrop (SN#103)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product3,
        inStock: true,
        description: "Bring a touch of mystery with the White Cat backdrop. Its deep blue tones create an enchanting atmosphere for any shoot.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 4,
        name: "Blush Gray Painted Canvas Backdrop (SN#104)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Dirt brown",
        size: "Small",
        texture: "Solid",
        image: product4,
        inStock: true,
        description: "The Blush Gray backdrop offers a gentle gradient effect, perfect for romantic and soft photography styles.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 5,
        name: "Cedar Stone Painted Canvas Backdrop (SN#105)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Dirt brown",
        size: "Medium",
        texture: "Solid",
        image: product5,
        inStock: true,
        description: "Capture nature's beauty with the Cedar Stone backdrop. Its grainy texture enhances outdoor-themed photos.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 6,
        name: "Golden Hour Painted Canvas Backdrop (SN#106)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Cream",
        size: "Large",
        texture: "Solid",
        image: product6,
        inStock: true,
        description: "The Golden Hour backdrop radiates warmth and light, perfect for enhancing your portraits and event photography.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 7,
        name: "Sunset Sky Painted Canvas Backdrop (SN#107)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Dark blue",
        size: "Large",
        texture: "Solid",
        image: product7,
        inStock: true,
        description: "The Sunset Sky backdrop features vibrant swirls of red, creating a dynamic background for your creative projects.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 8,
        name: "Foggy Morning Painted Canvas Backdrop (SN#108)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Black",
        size: "Small",
        texture: "Mid",
        image: product8,
        inStock: true,
        description: "Set the mood with the Foggy Morning backdrop, providing a soft, dreamy quality to your images.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 9,
        name: "Dusty Rose Painted Canvas Backdrop (SN#109)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Brown",
        size: "Medium",
        texture: "Solid",
        image: product9,
        inStock: true,
        description: "The Dusty Rose backdrop exudes elegance and softness, perfect for weddings and fashion photography.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 10,
        name: "Rustic Charm Painted Canvas Backdrop (SN#110)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Light cream",
        size: "Large",
        texture: "Solid",
        image: product10,
        inStock: true,
        description: "Bring a rustic feel to your photos with the Rustic Charm backdrop, featuring strong textures and warm colors.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    // Add more products as needed...
    {
        id: 11,
        name: "Olive brown Painted Canvas Backdrop (SN#111)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Light brown",
        size: "Medium",
        texture: "Solid",
        image: product11,
        inStock: true,
        description: "This Olive Green backdrop is perfect for creating a calm and serene atmosphere for your photography sessions.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 12,
        name: "Twilight Mist Painted Canvas Backdrop (SN#112)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Dark blue",
        size: "Small",
        texture: "Solid",
        image: product12,
        inStock: true,
        description: "The Twilight Mist backdrop features a beautiful blend of colors, perfect for evening or twilight-themed shoots.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 13,
        name: "Midnight brown Painted Canvas Backdrop (SN#113)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Brown",
        size: "Large",
        texture: "Solid",
        image: product13,
        inStock: true,
        description: "Experience the depth of color with the Midnight Blue backdrop, ideal for dramatic portraits and artistic photography.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 14,
        name: "Silver Lining Painted Canvas Backdrop (SN#114)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Cream",
        size: "Medium",
        texture: "Solid",
        image: product14,
        inStock: true,
        description: "The Silver Lining backdrop offers a unique gradient effect, creating a stunning visual for your projects.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 15,
        name: "Warm Amber Painted Canvas Backdrop (SN#115)",
        category: "Rental",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Amber green",
        size: "Small",
        texture: "Solid",
        image: product15,
        inStock: true,
        description: "Add warmth to your scenes with the Warm Amber backdrop, featuring rich tones and a textured finish.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 16,
        name: "Sun Depths Painted Canvas Backdrop (SN#116)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Yellowish red",
        size: "Large",
        texture: "Solid",
        image: product16,
        inStock: true,
        description: "Dive into creativity with the Ocean Depths backdrop, featuring swirling patterns that evoke the sea.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 17,
        name: "Pine Forest Painted Canvas Backdrop (SN#117)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Yellowish brown",
        size: "Medium",
        texture: "Solid",
        image: product17,
        inStock: true,
        description: "Capture the essence of nature with the Pine Forest backdrop, featuring lush green tones and textures.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 18,
        name: "Yellow Fields Painted Canvas Backdrop (SN#118)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 * 0.75, // 25% off
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product18,
        inStock: true,
        description: "The Lavender Fields backdrop adds a touch of serenity and color, perfect for any romantic shoot.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 19,
        name: "Rodeo Dust Painted Canvas Backdrop (RN#100)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Green",
        size: "Medium",
        texture: "Solid",
        image: product1,
        inStock: true,
        description: "Create a dramatic effect with the Misty Mountains backdrop, ideal for capturing the beauty of nature.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 20,
        name: "Clay Light Painted Canvas Backdrop (SN#102) (RN#101)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Blue",
        size: "Large",
        texture: "Solid",
        image: product2,
        inStock: true,
        description: "Experience vibrant underwater scenes with the Coral Reef backdrop, featuring bright colors and dynamic textures.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 21,
        name: "White Cat Painted Canvas Backdrop(RN#102)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Dark Blue",
        size: "Large",
        texture: "Solid",
        image: product3,
        inStock: true,
        description: "Transform your photos with the Starry Night backdrop, featuring a stunning array of stars that create a magical nighttime atmosphere.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 22,
        name: "Blush Gray Painted Canvas Backdrop (RN#103)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Orange",
        size: "Medium",
        texture: "Solid",
        image: product4,
        inStock: true,
        description: "Capture the essence of fall with the Autumn Leaves backdrop, showcasing vibrant orange hues and textured patterns that evoke the beauty of nature.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 23,
        name: "Cedar Stone Painted Canvas Backdrop (RN#104)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Beige",
        size: "Large",
        texture: "Solid",
        image: product5,
        inStock: true,
        description: "Create a serene beach vibe with the Golden Sands backdrop, featuring soft beige tones and a smooth finish that enhances any setting.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 24,
        name: "Golden Hour Painted Canvas Backdrop(RN#105)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Light Blue",
        size: "Medium",
        texture: "Glossy",
        image: product6,
        inStock: true,
        description: "Capture the tranquility of winter with the Frozen Lake backdrop, showcasing icy blue tones and a glossy texture that brings your scenes to life.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 25,
        name: "Sunset Sky Painted Canvas Backdrop (RN#106)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Multicolor",
        size: "Large",
        texture: "Solid",
        image: product7,
        inStock: true,
        description: "Bring an edgy urban feel to your photos with the Urban Graffiti backdrop, featuring a vibrant mix of colors and textures that scream creativity.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 26,
        name: "Foggy Morning Painted Canvas Backdrop (RN#107)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Tan",
        size: "Large",
        texture: "Solid",
        image: product8,
        inStock: true,
        description: "Add a touch of adventure with the Desert Dunes backdrop, featuring tan waves that simulate the soft curves of sand dunes.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 27,
        name: "Dusty Rose Painted Canvas Backdrop (RN#108)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Purple",
        size: "Medium",
        texture: "Solid",
        image: product9,
        inStock: true,
        description: "Immerse yourself in the beauty of nature with the Lavender Fields backdrop, showcasing calming purple tones and a smooth texture.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 28,
        name: "Rustic Charm Painted Canvas Backdrop (RN#109)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Brown",
        size: "Large",
        texture: "Solid",
        image: product10,
        inStock: true,
        description: "Create a warm, inviting atmosphere with the Rustic Wood backdrop, featuring natural brown tones and a grainy texture that adds depth to your shots.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 29,
        name: "Olive Brown Painted Canvas Backdrop (RN#110)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Pink",
        size: "Small",
        texture: "Solid",
        image: product11,
        inStock: true,
        description: "Celebrate the beauty of spring with the Spring Blossoms backdrop, adorned with soft pink flowers that add a touch of freshness to any photo.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 30,
        name: "Twilight Mist Painted Canvas Backdrop (RN#111)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product12,
        inStock: true,
        description: "Enhance your artistic creations with the Ethereal Mist backdrop, featuring a soft gray fog that adds a dreamlike quality to your photos.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },  
    {
        id: 31,
        name: "Midnight Blue Painted Canvas Backdrop (RN#112)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product13,
        inStock: true,
        description: "Enhance your artistic creations with the Dreamy Haze backdrop, featuring a soft gray fog that adds a dreamlike quality to your photos.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 32,
        name: "Silver Lining Painted Canvas Backdrop (RN#113)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product14,
        inStock: true,
        description: "Elevate your photography with the Serene Fog backdrop, showcasing a tranquil gray texture for stunning compositions.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 33,
        name: "Warm Amber Painted Canvas Backdrop (RN#1114)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product15,
        inStock: true,
        description: "Capture ethereal moments with the Mystic Cloud backdrop, offering a soft and dreamy gray fog design.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 34,
        name: "Ocean Depths Painted Canvas Backdrop (RN#116)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product16,
        inStock: true,
        description: "The Gray Whisper backdrop adds a delicate and foggy charm to your artistic projects, perfect for subtle elegance.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 35,
        name: "Pine Forest Painted Canvas Backdrop (RN#117)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product17,
        inStock: true,
        description: "Add depth to your photos with the Velvet Mist backdrop, featuring a rich gray fog design for a luxurious touch.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 36,
        name: "Yellow Fields Painted Canvas Backdrop (RN#118)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product18,
        inStock: true,
        description: "Transform your scenes with the Eclipse Drift backdrop, delivering a mysterious gray fog to enhance any artistic vision.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    }
    
];

