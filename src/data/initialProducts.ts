export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
}

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones Pro",
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life and crystal-clear sound quality.",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    rating: 4.8,
    stock: 45
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description: "Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.",
    price: 249,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Fitness",
    rating: 4.6,
    stock: 32
  },
  {
    id: "3",
    name: "Designer Sunglasses",
    description: "Stylish UV-protection sunglasses with polarized lenses and premium metal frame.",
    price: 189,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500",
    category: "Accessories",
    rating: 4.9,
    stock: 28
  },
  {
    id: "4",
    name: "Luxury Leather Handbag",
    description: "Handcrafted genuine leather handbag with multiple compartments and elegant design.",
    price: 459,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    category: "Fashion",
    rating: 4.7,
    stock: 15
  },
  {
    id: "5",
    name: "Organic Skincare Set",
    description: "Complete skincare routine with natural ingredients for radiant and healthy skin.",
    price: 129,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500",
    category: "Beauty",
    rating: 4.8,
    stock: 67
  },
  {
    id: "6",
    name: "Running Shoes Elite",
    description: "High-performance running shoes with advanced cushioning and breathable mesh upper.",
    price: 159,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    category: "Fitness",
    rating: 4.7,
    stock: 50
  },
  {
    id: "7",
    name: "Wireless Bluetooth Speaker",
    description: "Portable waterproof speaker with 360-degree sound and 24-hour battery life.",
    price: 149,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Electronics",
    rating: 4.6,
    stock: 38
  },
  {
    id: "8",
    name: "Silk Evening Dress",
    description: "Elegant silk dress perfect for formal events and special occasions.",
    price: 389,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    category: "Fashion",
    rating: 4.9,
    stock: 12
  }
];

export const categories = [
  { name: "Electronics", icon: "⚡" },
  { name: "Fashion", icon: "👗" },
  { name: "Beauty", icon: "💄" },
  { name: "Fitness", icon: "🏋️" },
  { name: "Accessories", icon: "⌚" }
];
