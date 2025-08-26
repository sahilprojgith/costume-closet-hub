import { useState } from "react";
import { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart, Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
  onRent?: (product: Product) => void;
  className?: string;
}

export function ProductCard({ product, onViewDetails, onRent, className }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className={cn(
      "group overflow-hidden transition-smooth hover:shadow-elegant hover:-translate-y-1 gradient-card",
      className
    )}>
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover transition-smooth group-hover:scale-105",
              imageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur">
              {product.category.name}
            </Badge>
          </div>
          
          {product.inStock && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-accent text-accent-foreground">
                Available
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="font-playfair font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-smooth">
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-primary">
            <Clock className="h-4 w-4" />
            <span className="font-medium">${product.hourlyRate}/hr</span>
          </div>
          
          <div className="flex items-center gap-1 text-foreground">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium">${product.price}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails?.(product)}
        >
          <Eye className="h-4 w-4 mr-2" />
          Details
        </Button>
        
        <Button
          size="sm"
          className="flex-1 bg-gradient-primary hover:bg-primary-hover"
          onClick={() => onRent?.(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Rent Now
        </Button>
      </CardFooter>
    </Card>
  );
}