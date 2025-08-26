import { ProductGallery } from "@/components/products/ProductGallery";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  Package, 
  Calendar,
  ArrowUpRight,
  Crown
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$12,435",
      change: "+12%",
      icon: TrendingUp,
      trend: "up"
    },
    {
      title: "Active Rentals",
      value: "23",
      change: "+3",
      icon: Calendar,
      trend: "up"
    },
    {
      title: "Total Products",
      value: "156",
      change: "+5",
      icon: Package,
      trend: "up"
    },
    {
      title: "Customers",
      value: "89",
      change: "+8",
      icon: Users,
      trend: "up"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-luxury p-8 text-luxury-foreground">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Crown className="h-8 w-8" />
            <h1 className="text-3xl font-playfair font-bold">
              Welcome to Costume Rental Dashboard
            </h1>
          </div>
          <p className="text-luxury-foreground/80 text-lg mb-6 max-w-2xl">
            Manage your premium costume collection with style. Track rentals, monitor inventory, 
            and provide exceptional service to your customers.
          </p>
          <Button 
            variant="secondary" 
            className="bg-background/20 hover:bg-background/30 text-luxury-foreground border-luxury-foreground/20"
          >
            View Analytics
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-playfair font-bold text-foreground">
                {stat.value}
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <Badge 
                  variant="secondary" 
                  className="bg-accent/10 text-accent-foreground border-accent/20"
                >
                  {stat.change}
                </Badge>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Products */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-playfair font-semibold text-foreground">
              Featured Collection
            </h2>
            <p className="text-muted-foreground">
              Our most popular costume rentals
            </p>
          </div>
          
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
            View All Products
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <ProductGallery />
      </div>
    </div>
  );
};

export default Dashboard;
