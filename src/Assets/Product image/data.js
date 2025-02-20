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
import product19 from '../Real-product/119.JPG';
import product20 from '../Real-product/120.JPG';
import product21 from '../Real-product/121.JPG';
import product22 from '../Real-product/122.JPG';
import product23 from '../Real-product/123.JPG';
import product24 from '../Real-product/124.JPG';
import product25 from '../Real-product/125.JPG';
import product26 from '../Real-product/126.JPG';
import product27 from '../Real-product/127.JPG';
import product28 from '../Real-product/128.JPG';
import product29 from '../Real-product/129.JPG';
import product30 from '../Real-product/130.jpg';
import product31 from '../Real-product/131.JPG';



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
        price: 150000 ,
        discountedPrice: 150000 * 0.90, // Discounted price (10% off)
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
        color: "Yellowish red",
        size: "Large",
        texture: "Solid",
        image: product16,
        inStock: false,
        description: "Dive into creativity with the Ocean Depths backdrop, featuring swirling patterns that evoke the sea.",
        returnPolicy: "Returns are accepted within 30 days of rental. Item must be in original condition."
    },
    {
        id: 17,
        name: "Pine Forest Painted Canvas Backdrop (SN#117)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000 ,
        discountedPrice: 150000 * 0.90,
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
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product18,
        inStock: true,
        description:
          "Bring the essence of a sunlit countryside into your shoot with the Yellow Fields Painted Canvas Backdrop. This large, solid-textured canvas radiates vibrant yellow hues reminiscent of endless fields under a bright sky, infusing warmth and energy into any creative project.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 19,
        name: "Almond Cloud Patches Painted Canvas Backdrop (SN#119)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product19,
        inStock: true,
        description:
          "Delicate and dreamy, the Almond Cloud Patches Painted Canvas Backdrop offers a refined blend of soft almond hues interwoven with whimsical cloud patterns—perfect for evoking a serene yet dynamic atmosphere.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 20,
        name: "Creamy Dreamy Painted Canvas Backdrop (SN#120)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product20,
        inStock: true,
        description:
          "Elevate your visuals with the Creamy Dreamy Painted Canvas Backdrop, featuring luxurious creamy tones and a subtle, ethereal finish. Ideal for portraits, weddings, or any project that seeks a soft, dreamy ambiance.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 21,
        name: "Crush Cramsicle Painted Canvas Backdrop (SN#121)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product21,
        inStock: true,
        description:
          "Inject a burst of playful energy into your shoot with the Crush Cramsicle Painted Canvas Backdrop. Its bold, refreshing hues evoke the cool, fun spirit of a classic creamsicle treat—ideal for lively, creative projects.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 22,
        name: "Drak Magic Hour Painted Canvas Backdrop (SN#122)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product22,
        inStock: true,
        description:
          "Experience the enchanting allure of dusk with the Drak Magic Hour Painted Canvas Backdrop. Rich, deep tones and a mystical finish capture the magical moment of twilight—perfect for dramatic, atmospheric shoots.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 23,
        name: "Secret Garden Painted Canvas Backdrop (SN#123)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product23,
        inStock: true,
        description:
          "Step into a hidden oasis with the Secret Garden Painted Canvas Backdrop. Intricate details and lush tones evoke the charm of a secluded garden—perfect for creating romantic and whimsical scenes.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 24,
        name: "Polka Dot Paradise Painted Canvas Backdrop (SN#124)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product24,
        inStock: true,
        description:
          "Embrace a playful aesthetic with the Polka Dot Paradise Painted Canvas Backdrop. Its bold pattern of cheerful polka dots transforms any space into a fun, artistic haven—ideal for quirky and vibrant projects.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 25,
        name: "Sunflower Field Painted Canvas Backdrop (SN#125)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product25,
        inStock: true,
        description:
          "Capture the radiant energy of a summer day with the Sunflower Field Painted Canvas Backdrop. Its vibrant yellow tones and natural textures evoke endless fields of blooming sunflowers, adding warmth to every shot.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 26,
        name: "Sandy Toes Painted Canvas Backdrop (SN#126)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product26,
        inStock: true,
        description:
          "Infuse your shoot with a breezy, coastal vibe using the Sandy Toes Painted Canvas Backdrop. Soft, sandy hues and subtle textures evoke the relaxed spirit of a beach day—ideal for creating a laid-back atmosphere.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 27,
        name: "Mocha Magic Painted Canvas Backdrop (SN#127)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product27,
        inStock: true,
        description:
          "Add a touch of sophisticated warmth to your scenes with the Mocha Magic Painted Canvas Backdrop. Rich mocha hues and a refined texture create a luxurious setting for artistic and elegant projects.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 28,
        name: "Blue Sea Painted Canvas Backdrop (SN#128)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product28,
        inStock: true,
        description:
          "Dive into tranquility with the Blue Sea Painted Canvas Backdrop. Cool blue tones and fluid patterns evoke the serene beauty of ocean waves, setting a calm, aquatic mood for your projects.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 29,
        name: "Sunset Painted Canvas Backdrop (SN#129)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product29,
        inStock: true,
        description:
          "Set the mood with the captivating glow of the Sunset Painted Canvas Backdrop. Its vibrant gradients and warm hues capture the fleeting beauty of dusk, perfect for dramatic, emotive visuals.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 30,
        name: "Tipsy Tea Painted Canvas Backdrop (SN#130)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product30,
        inStock: true,
        description:
          "Introduce a whimsical twist to your project with the Tipsy Tea Painted Canvas Backdrop. Its quirky blend of soft hues and artistic patterns evokes the charm of a playful tea party—ideal for unconventional shoots.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 31,
        name: "Clay Stone Cliff Painted Canvas Backdrop (SN#131)",
        category: "Backdrop",
        type: "Backdrop",
        price: 150000,
        discountedPrice: 135000,
        color: "Yellow",
        size: "Large",
        texture: "Solid",
        image: product31,
        inStock: true,
        description:
          "Ground your visuals in natural elegance with the Clay Stone Cliff Painted Canvas Backdrop. Earthy clay tones and rugged textures evoke the timeless majesty of stone cliffs, adding depth and character to any scene.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 32,
        name: "Rodeo Dust Painted Canvas Backdrop (RN#100)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Green",
        size: "Medium",
        texture: "Solid",
        image: product1,
        inStock: true,
        description:
          "Capture the rugged spirit of the wild west with the Rodeo Dust Painted Canvas Backdrop. Its earthy, dust-kissed tones bring an authentic rodeo vibe to dynamic, outdoor-inspired shoots.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 33,
        name: "Clay Light Painted Canvas Backdrop (SN#102) (RN#101)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Blue",
        size: "Large",
        texture: "Solid",
        image: product2,
        inStock: true,
        description:
          "Enhance your creative vision with the Clay Light Painted Canvas Backdrop. Featuring soft, neutral clay tones and a smooth finish, this backdrop offers a versatile and understated setting for any project.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 34,
        name: "White Cat Painted Canvas Backdrop(RN#102)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Dark Blue",
        size: "Large",
        texture: "Solid",
        image: product3,
        inStock: true,
        description:
          "Embrace elegance and mystery with the White Cat Painted Canvas Backdrop. Its crisp, refined white palette sets a sophisticated tone—perfect for modern, artistic compositions.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 35,
        name: "Blush Gray Painted Canvas Backdrop (RN#103)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Orange",
        size: "Medium",
        texture: "Solid",
        image: product4,
        inStock: true,
        description:
          "Introduce subtle sophistication with the Blush Gray Painted Canvas Backdrop. A harmonious blend of soft blush and gray tones creates a balanced, contemporary backdrop for diverse creative endeavors.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 36,
        name: "Cedar Stone Painted Canvas Backdrop (RN#104)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Beige",
        size: "Large",
        texture: "Solid",
        image: product5,
        inStock: true,
        description:
          "Set a rustic yet refined scene with the Cedar Stone Painted Canvas Backdrop. Warm cedar hues combined with textured stone elements evoke a timeless, natural ambiance.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 37,
        name: "Golden Hour Painted Canvas Backdrop(RN#105)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Light Blue",
        size: "Medium",
        texture: "Glossy",
        image: product6,
        inStock: true,
        description:
          "Capture the fleeting magic of dusk with the Golden Hour Painted Canvas Backdrop. Radiant, warm tones evoke the enchanting glow of sunset—ideal for creating a dreamy, atmospheric effect.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 38,
        name: "Sunset Sky Painted Canvas Backdrop (RN#106)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Multicolor",
        size: "Large",
        texture: "Solid",
        image: product7,
        inStock: true,
        description:
          "Transform your scene with the expansive beauty of the Sunset Sky Painted Canvas Backdrop. Vibrant gradients and dynamic colors mirror the dramatic hues of a twilight sky, perfect for stunning visuals.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 39,
        name: "Foggy Morning Painted Canvas Backdrop (RN#107)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Tan",
        size: "Large",
        texture: "Solid",
        image: product8,
        inStock: true,
        description:
          "Set a serene, ethereal tone with the Foggy Morning Painted Canvas Backdrop. Its soft, muted colors and delicate, misty texture evoke the calm of an early morning fog.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 40,
        name: "Dusty Rose Painted Canvas Backdrop (RN#108)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Purple",
        size: "Medium",
        texture: "Solid",
        image: product9,
        inStock: true,
        description:
          "Infuse your visuals with romantic charm using the Dusty Rose Painted Canvas Backdrop. Gentle dusty rose hues and a subtle texture evoke the delicate beauty of a blooming garden at dusk.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 41,
        name: "Rustic Charm Painted Canvas Backdrop (RN#109)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Brown",
        size: "Large",
        texture: "Solid",
        image: product10,
        inStock: true,
        description:
          "Add a timeless, vintage appeal to your scenes with the Rustic Charm Painted Canvas Backdrop. Warm earthy tones and a weathered texture evoke the nostalgic feel of rustic settings.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 42,
        name: "Olive Brown Painted Canvas Backdrop (RN#110)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Pink",
        size: "Small",
        texture: "Solid",
        image: product11,
        inStock: true,
        description:
          "Celebrate earthy sophistication with the Olive Brown Painted Canvas Backdrop. Rich olive and brown hues blend naturally to create an organic, refined backdrop perfect for a variety of creative projects.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 43,
        name: "Twilight Mist Painted Canvas Backdrop (RN#111)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product12,
        inStock: true,
        description:
          "Step into a dreamlike atmosphere with the Twilight Mist Painted Canvas Backdrop. Soft twilight hues and a gentle misty finish create a serene, almost magical setting for your work.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 44,
        name: "Midnight Blue Painted Canvas Backdrop (RN#112)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product13,
        inStock: true,
        description:
          "Experience the mystery of the night with the Midnight Blue Painted Canvas Backdrop. Deep, rich blue tones and a smooth finish evoke the elegance of a starlit sky.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 45,
        name: "Silver Lining Painted Canvas Backdrop (RN#113)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product14,
        inStock: true,
        description:
          "Brighten your visuals with the subtle shimmer of the Silver Lining Painted Canvas Backdrop. Cool silver tones and a refined texture provide an uplifting, sophisticated backdrop.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 46,
        name: "Warm Amber Painted Canvas Backdrop (RN#114)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product15,
        inStock: true,
        description:
          "Infuse your scene with a cozy glow using the Warm Amber Painted Canvas Backdrop. Rich amber hues and a smooth finish create an inviting, radiant atmosphere.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 47,
        name: "Ocean Depths Painted Canvas Backdrop (RN#116)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product16,
        inStock: true,
        description:
          "Delve into the mysterious allure of the deep blue with the Ocean Depths Painted Canvas Backdrop. Its profound blue tones and textured finish evoke the vast, enigmatic beauty of the ocean.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 48,
        name: "Pine Forest Painted Canvas Backdrop (RN#117)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product17,
        inStock: true,
        description:
          "Transport your audience to a serene woodland with the Pine Forest Painted Canvas Backdrop. Lush greens and intricate textures capture the calming essence of a dense forest.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 49,
        name: "Yellow Fields Painted Canvas Backdrop (RN#118)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product18,
        inStock: true,
        description:
          "Illuminate your creative space with the Yellow Fields Painted Canvas Backdrop. Vibrant yellow hues reminiscent of sunlit meadows bring energy and optimism to your visuals.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 50,
        name: "Almond Cloud Patches Painted Canvas Backdrop (RN#119)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product19,
        inStock: true,
        description:
          "Bring a delicate balance of elegance and whimsy with the Almond Cloud Patches Painted Canvas Backdrop. Soft almond shades intermingled with gentle cloud motifs create a serene, inspiring setting.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 51,
        name: "Creamy Dreamy Painted Canvas Backdrop (RN#120)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product20,
        inStock: true,
        description:
          "Immerse your work in a soft, ethereal glow with the Creamy Dreamy Painted Canvas Backdrop. Its smooth, creamy tones set a tranquil, dreamy ambiance perfect for refined imagery.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 52,
        name: "Crush Creamsicle Painted Canvas Backdrop (RN#121)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product21,
        inStock: true,
        description:
          "Energize your shoot with the bold, refreshing vibe of the Crush Creamsicle Painted Canvas Backdrop. Vibrant hues reminiscent of a classic creamsicle treat add a playful spark to any scene.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 53,
        name: "Dark Magic Hour Painted Canvas Backdrop (RN#122)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product22,
        inStock: true,
        description:
          "Embrace the drama of twilight with the Dark Magic Hour Painted Canvas Backdrop. Deep, enchanting tones and a subtle mystical finish create a captivating, moody atmosphere.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 55,
        name: "Secret Garden Painted Canvas Backdrop (RN#123)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product23,
        inStock: true,
        description:
          "Unveil a hidden oasis in your visuals with the Secret Garden Painted Canvas Backdrop. Intricate botanical details and lush colors evoke the charm of a secluded, magical garden.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 56,
        name: "Polka Dot Paradise Painted Canvas Backdrop (RN#124)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product24,
        inStock: true,
        description:
          "Add a burst of playful energy with the Polka Dot Paradise Painted Canvas Backdrop. Its bold polka dot design on a vibrant canvas transforms any scene into a fun, creative playground.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 57,
        name: "Sunflower Field Painted Canvas Backdrop (RN#125)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product25,
        inStock: true,
        description:
          "Capture the sunny essence of nature with the Sunflower Field Painted Canvas Backdrop. Bright, cheerful hues and natural textures evoke sprawling fields of blooming sunflowers.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 58,
        name: "Sandy Toes Painted Canvas Backdrop (RN#126)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product26,
        inStock: true,
        description:
          "Channel the laid-back vibe of the coast with the Sandy Toes Painted Canvas Backdrop. Warm, sandy tones and a relaxed design evoke the carefree spirit of beachside escapes.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 59,
        name: "Mocha Magic Painted Canvas Backdrop (RN#127)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product27,
        inStock: true,
        description:
          "Introduce a refined, warm allure to your visuals with the Mocha Magic Painted Canvas Backdrop. Its rich, coffee-inspired hues and elegant texture create a backdrop of sophisticated charm.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 60,
        name: "Blue Sea Painted Canvas Backdrop (RN#128)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product28,
        inStock: true,
        description:
          "Dive into a serene aquatic atmosphere with the Blue Sea Painted Canvas Backdrop. Cool blue tones and dynamic brushstrokes capture the tranquil essence of the ocean.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 61,
        name: "Sunset Painted Canvas Backdrop (RN#129)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product29,
        inStock: true,
        description:
          "Envelop your scene in the warm glow of dusk with the Sunset Painted Canvas Backdrop. Vibrant gradients and soft transitions mirror the breathtaking beauty of a setting sun.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 62,
        name: "Tipsy Tea Painted Canvas Backdrop (RN#130)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product30,
        inStock: true,
        description:
          "Infuse your project with quirky charm using the Tipsy Tea Painted Canvas Backdrop. Its playful mix of soft hues and whimsical patterns evokes the delight of an eccentric tea party.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      },
      {
        id: 63,
        name: "Clay Stone Cliff Painted Canvas Backdrop (RN#131)",
        category: "Rental",
        type: "Rental",
        price: 10000,
        discountedPrice: 10000,
        color: "Gray",
        size: "Large",
        texture: "Solid",
        image: product31,
        inStock: true,
        description:
          "Ground your narrative in natural beauty with the Clay Stone Cliff Painted Canvas Backdrop. Earthy clay tones and rugged textures echo the timeless majesty of stone cliffs—perfect for evocative storytelling.",
        returnPolicy:
          "Returns are accepted within 30 days of rental. Item must be in original condition."
      }
    
    
    
    
    
];

