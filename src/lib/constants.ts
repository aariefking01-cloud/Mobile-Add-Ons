export const SHOP = {
  name: 'Mobile Add Ons',
  tagline: 'Premium Mobile Accessories',
  floor: '2nd Floor (Opposite Lifestyle)',
  landmark: 'VR Mall',
  address: 'VR Mall, Jawaharlal Nehru Road, Anna Nagar West, Chennai, Tamil Nadu 600040',
  fullAddress: '2nd Floor (Opposite Lifestyle), VR Mall, Jawaharlal Nehru Road, Anna Nagar West, Chennai, Tamil Nadu 600040',
  phones: ['+91 9952636469', '+91 7397226564'],
  phoneRaw: ['9952636469', '7397226564'],
  emails: ['syed86.ibrahim@gmail.com', 'mdjai1529@gmail.com'],
  hours: '10:00 AM - 10:00 PM',
  hoursShort: '10 AM - 10 PM',
  whatsapp: '9952636469',
  mapQuery: 'VR Mall, Jawaharlal Nehru Road, Anna Nagar West, Chennai, Tamil Nadu 600040',
};

export type Product = {
  id: string;
  name: string;
  price: string;
  tag: string;
  image: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'blueo-gorilla-glass',
    name: 'Blueo Mr. Gorilla HD Temper',
    price: '₹1,999',
    tag: 'Top Rated',
    image: '/assets/images/1000046090.jpg',
    description: '9H hardness, full-screen coverage, oleophobic coating, smooth touch.',
  },
  {
    id: 'samsung-silicon-case',
    name: 'Samsung Silicon Case',
    price: '₹599',
    tag: 'Best Seller',
    image: '/assets/images/1000046093.jpg',
    description: 'Soft-touch silicon, slim fit, anti-slip grip, precise cutouts.',
  },
  {
    id: 'iphone-silicon-case',
    name: 'iPhone Silicon Case',
    price: '₹599',
    tag: 'New',
    image: '/assets/images/1000046096.jpg',
    description: 'Microfiber lining, matte finish, smooth button feel, slim fit.',
  },
  {
    id: 'spigen-slim-temper',
    name: 'Spigen Slim Temper',
    price: '₹1,499',
    tag: 'Premium',
    image: '/assets/images/1000046102.jpg',
    description: '9H hardness, edge-to-edge, auto-align installation, crystal-clear.',
  },
];

export type Accessory = {
  id: string;
  name: string;
  image: string;
  description: string;
  tag: string;
};

export const ACCESSORIES: Accessory[] = [
  {
    id: 'earbuds',
    name: 'Wireless Earbuds',
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'True wireless earbuds with deep bass, noise isolation, and long battery life. Multiple brands available in store.',
    tag: 'Ask In Store',
  },
  {
    id: 'charger',
    name: 'Fast Chargers & Cables',
    image: 'https://images.pexels.com/photos/38649173/pexels-photo-38649173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Fast charging adapters and premium braided cables for all phone models. Type-C, Lightning, and Micro USB.',
    tag: 'Ask In Store',
  },
  {
    id: 'powerbank',
    name: 'Power Banks',
    image: 'https://images.pexels.com/photos/947407/pexels-photo-947407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Portable power banks in various capacities. Compact designs perfect for daily use and travel.',
    tag: 'Ask In Store',
  },
  {
    id: 'stand',
    name: 'Phone Stands & Holders',
    image: 'https://images.pexels.com/photos/12953565/pexels-photo-12953565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Adjustable desk stands and car holders for hands-free use. Compatible with all smartphone sizes.',
    tag: 'Ask In Store',
  },
];

export type Offer = {
  title: string;
  description: string;
  badge: string;
};

export const OFFERS: Offer[] = [
  {
    title: 'Buy 1 Get 1 Free',
    description: 'On selected mobile cases. Mix and match across Samsung and iPhone covers.',
    badge: 'BOGO',
  },
  {
    title: '20% Off Tempered Glass',
    description: 'Get premium Spigen and Blueo tempered glass at a flat 20% discount this week.',
    badge: '-20%',
  },
  {
    title: 'Free Installation',
    description: 'Free tempered glass installation with every screen guard purchase.',
    badge: 'FREE',
  },
  {
    title: 'Combo Offer',
    description: 'Case + Tempered glass combo starting at just ₹999. Protect your phone completely.',
    badge: '₹999',
  },
];

export const BRANDS = ['Apple', 'Samsung', 'OnePlus', 'boAt', 'JBL', 'Xiaomi', 'Realme', 'Oppo'];

export type Feature = {
  title: string;
  description: string;
  icon: string;
};

export const FEATURES: Feature[] = [
  { title: 'Genuine Products', description: '100% authentic accessories from trusted brands only.', icon: 'ShieldCheck' },
  { title: 'Best Prices', description: 'Competitive pricing with regular offers and combo deals.', icon: 'Tag' },
  { title: 'Expert Fitting', description: 'Free professional installation for cases and screen guards.', icon: 'Wrench' },
  { title: 'Wide Range', description: 'Cases, covers, tempered glass, chargers, and more for every model.', icon: 'LayoutGrid' },
  { title: 'Quick Service', description: 'Fast and friendly service so you never wait too long.', icon: 'Zap' },
  { title: 'Trusted by Many', description: 'Hundreds of happy customers across Anna Nagar and beyond.', icon: 'Heart' },
  { title: 'Prime Location', description: 'Easy to find in VR Mall, opposite Lifestyle on Jawaharlal Nehru Road.', icon: 'MapPin' },
  { title: 'Open till 10 PM', description: 'Late hours so you can shop after work, every day.', icon: 'Clock' },
];

export type Faq = {
  question: string;
  answer: string;
};

export const FAQS: Faq[] = [
  {
    question: 'What are your shop timings?',
    answer: 'We are open every day from 10:00 AM to 10:00 PM. You can visit us any time during these hours.',
  },
  {
    question: 'Where is the shop located?',
    answer: 'We are on the 2nd Floor (opposite Lifestyle) in VR Mall, on Jawaharlal Nehru Road, Anna Nagar West, Chennai 600040.',
  },
  {
    question: 'Do you sell accessories for all phone brands?',
    answer: 'Yes! We stock cases, covers, tempered glass, and accessories for Apple, Samsung, OnePlus, Xiaomi, Realme, Oppo, and more.',
  },
  {
    question: 'Do you offer tempered glass installation?',
    answer: 'Yes, we provide free professional installation for every tempered glass purchase.',
  },
  {
    question: 'Can I contact you on WhatsApp?',
    answer: 'Absolutely. You can WhatsApp us at 9952636469 or 7397226564 for product availability and enquiries.',
  },
  {
    question: 'Are the products genuine?',
    answer: 'Every product we sell is 100% genuine and sourced directly from trusted brands and distributors.',
  },
];

export const LOGO_IMAGE = '/assets/images/1000046154.png';

export const GALLERY_IMAGES = [
  '/assets/images/1000046090.jpg',
  '/assets/images/1000046093.jpg',
  '/assets/images/1000046096.jpg',
  '/assets/images/1000046102.jpg',
  '/assets/images/1000046154.png',
];
