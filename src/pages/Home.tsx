import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/initialProducts';
import { useShop } from '@/context/ShopContext';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Zap } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const Home = () => {
  const { products } = useShop();
  const trendingProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Shopping"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shop Smart. Live Stylish.
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover premium products at unbeatable prices. Your one-stop destination for everything you love.
            </p>
            <Link to="/products">
              <Button size="lg" variant="secondary" className="group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name}`}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-card rounded-xl p-8 text-center hover:shadow-hover transition-all duration-300 cursor-pointer group">
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="container mx-auto px-4 py-16 bg-secondary/30">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Products</h2>
            <p className="text-muted-foreground">Most popular items this week</p>
          </div>
          <Link to="/products">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Discount Banner */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-hero rounded-2xl p-12 text-center text-primary-foreground shadow-premium">
          <Zap className="w-16 h-16 mx-auto mb-4 animate-pulse" />
          <h2 className="text-4xl font-bold mb-4">🔥 50% Off on Fitness Gear!</h2>
          <p className="text-xl mb-6 opacity-90">
            Limited time offer. Get fit for less!
          </p>
          <Link to="/products?category=Fitness">
            <Button size="lg" variant="secondary">
              Shop Fitness
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
