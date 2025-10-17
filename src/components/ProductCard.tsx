import { Product } from '@/data/initialProducts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart, Star, Eye } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useShop();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 animate-fade-in">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            ${product.price}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleAddToCart}
              className="animate-slide-in"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <Button variant="secondary" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-sm text-muted-foreground">(128)</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-muted-foreground">
              Stock: {product.stock}
            </span>
            <span className={`text-sm font-medium ${product.stock > 20 ? 'text-green-600' : 'text-accent'}`}>
              {product.stock > 20 ? 'In Stock' : 'Limited Stock'}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
