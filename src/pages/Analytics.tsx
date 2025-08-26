import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign,
  Calendar,
  Package,
  Users
} from "lucide-react";

const Analytics = () => {
  const analyticsData = [
    {
      title: "Revenue This Month",
      value: "$12,435",
      change: "+12%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Total Rentals",
      value: "1,247",
      change: "+8%",
      trend: "up",
      icon: Calendar
    },
    {
      title: "Popular Category",
      value: "Historical",
      change: "35% of rentals",
      trend: "up",
      icon: Package
    },
    {
      title: "New Customers",
      value: "89",
      change: "+15%",
      trend: "up",
      icon: Users
    }
  ];

  const monthlyData = [
    { month: "Jan", revenue: 8500, rentals: 85 },
    { month: "Feb", revenue: 9200, rentals: 92 },
    { month: "Mar", revenue: 11800, rentals: 118 },
    { month: "Apr", revenue: 10500, rentals: 105 },
    { month: "May", revenue: 12400, rentals: 124 },
    { month: "Jun", revenue: 13200, rentals: 132 }
  ];

  const topProducts = [
    { name: "Medieval Knight Armor", rentals: 45, revenue: "$1,125" },
    { name: "Wizard Robe Deluxe", rentals: 38, revenue: "$760" },
    { name: "Superhero Cape Set", rentals: 32, revenue: "$480" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-foreground">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            Track your business performance and insights
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((metric) => (
          <Card key={metric.title} className="gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-playfair font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant="secondary"
                  className={`${
                    metric.trend === 'up' 
                      ? 'bg-accent/10 text-accent-foreground' 
                      : 'bg-destructive/10 text-destructive'
                  }`}
                >
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Revenue Chart */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              Monthly Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {monthlyData.map((data, index) => (
              <div key={data.month} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                    {data.month.substring(0, 1)}
                  </div>
                  <span className="font-medium">{data.month}</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold">${data.revenue.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">{data.rentals} rentals</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="gradient-card shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="h-5 w-5 mr-2 text-primary" />
              Top Performing Products
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.rentals} rentals</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-accent">{product.revenue}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;