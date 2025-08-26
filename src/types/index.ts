export interface User {
  userId: string;
  username: string;
  email: string;
  role: 'admin' | 'customer';
}

export interface Category {
  categoryId: string;
  name: string;
}

export interface Product {
  productId: string;
  name: string;
  description: string;
  price: number;
  hourlyRate: number;
  imageUrl: string;
  category: Category;
  inStock: boolean;
}

export interface Rental {
  rentalId: string;
  user: User;
  product: Product;
  startTime: string;
  endTime: string;
  totalAmount: number;
  status: 'active' | 'completed' | 'cancelled';
}

export interface RentalRequest {
  productId: string;
  userId: string;
  startTime: string;
  endTime: string;
}