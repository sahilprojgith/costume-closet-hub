import { useState, useEffect } from "react";
import { Rental } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Package, DollarSign, Clock } from "lucide-react";
import { apiService } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

const Rentals = () => {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadRentals();
  }, []);

  const loadRentals = async () => {
    try {
      const data = await apiService.getRentals();
      setRentals(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load rentals",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Rental['status']) => {
    switch (status) {
      case 'active':
        return 'bg-accent text-accent-foreground';
      case 'completed':
        return 'bg-primary text-primary-foreground';
      case 'cancelled':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded w-48"></div>
                    <div className="h-3 bg-muted rounded w-32"></div>
                  </div>
                  <div className="h-6 bg-muted rounded w-20"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-foreground">
            Rental Management
          </h1>
          <p className="text-muted-foreground">
            Track and manage all costume rentals
          </p>
        </div>
        
        <Button className="bg-gradient-primary">
          <Calendar className="h-4 w-4 mr-2" />
          New Rental
        </Button>
      </div>

      <div className="grid gap-4">
        {rentals.map((rental) => (
          <Card key={rental.rentalId} className="gradient-card shadow-card hover:shadow-elegant transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src={rental.product.imageUrl}
                      alt={rental.product.name}
                      className="w-16 h-20 object-cover rounded-lg border border-border"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-playfair font-semibold text-lg text-foreground">
                        {rental.product.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {rental.user.username}
                        </div>
                        <div className="flex items-center">
                          <Package className="h-4 w-4 mr-1" />
                          {rental.product.category.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      <div>
                        <div>Start: {formatDate(rental.startTime)}</div>
                        <div>End: {formatDate(rental.endTime)}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <div>
                        <div className="text-lg font-semibold text-foreground">
                          ${rental.totalAmount}
                        </div>
                        <div>Total Amount</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-start md:justify-end">
                      <Badge className={getStatusColor(rental.status)}>
                        {rental.status.charAt(0).toUpperCase() + rental.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {rentals.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No rentals found</h3>
          <p className="text-muted-foreground">
            Start by creating your first rental
          </p>
        </div>
      )}
    </div>
  );
};

export default Rentals;