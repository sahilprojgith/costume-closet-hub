import { User, Category, Product, Rental, RentalRequest } from '@/types';

// Import generated costume images
import knightArmorImg from '@/assets/knight-armor.jpg';
import wizardRobeImg from '@/assets/wizard-robe.jpg';
import superheroImg from '@/assets/superhero-cape.jpg';

// Mock data for development
const mockUsers: User[] = [
  { userId: '1', username: 'admin', email: 'admin@costume.com', role: 'admin' },
  { userId: '2', username: 'john_doe', email: 'john@example.com', role: 'customer' },
  { userId: '3', username: 'jane_smith', email: 'jane@example.com', role: 'customer' },
];

const mockCategories: Category[] = [
  { categoryId: '1', name: 'Historical' },
  { categoryId: '2', name: 'Fantasy' },
  { categoryId: '3', name: 'Superhero' },
  { categoryId: '4', name: 'Horror' },
  { categoryId: '5', name: 'Formal' },
];

const mockProducts: Product[] = [
  {
    productId: '1',
    name: 'Medieval Knight Armor',
    description: 'Authentic medieval knight costume with chainmail and helmet. Perfect for Renaissance fairs, historical reenactments, or themed parties.',
    price: 150,
    hourlyRate: 25,
    imageUrl: knightArmorImg,
    category: mockCategories[0],
    inStock: true,
  },
  {
    productId: '2',
    name: 'Wizard Robe Deluxe',
    description: 'Mystical wizard costume with hat, staff, and spell book. Complete magical ensemble for fantasy events.',
    price: 120,
    hourlyRate: 20,
    imageUrl: wizardRobeImg,
    category: mockCategories[1],
    inStock: true,
  },
  {
    productId: '3',
    name: 'Superhero Cape Set',
    description: 'Classic superhero costume with cape and mask. Perfect for comic conventions and superhero parties.',
    price: 80,
    hourlyRate: 15,
    imageUrl: superheroImg,
    category: mockCategories[2],
    inStock: true,
  },
];

const mockRentals: Rental[] = [
  {
    rentalId: '1',
    user: mockUsers[1],
    product: mockProducts[0],
    startTime: '2024-01-15T10:00:00Z',
    endTime: '2024-01-15T18:00:00Z',
    totalAmount: 200,
    status: 'completed',
  },
];

// API service functions
export const apiService = {
  // Users
  async getUsers(): Promise<User[]> {
    await delay(500);
    return mockUsers;
  },

  async getUserById(userId: string): Promise<User | null> {
    await delay(300);
    return mockUsers.find(user => user.userId === userId) || null;
  },

  // Categories
  async getCategories(): Promise<Category[]> {
    await delay(300);
    return mockCategories;
  },

  async createCategory(name: string): Promise<Category> {
    await delay(500);
    const newCategory: Category = {
      categoryId: Date.now().toString(),
      name,
    };
    mockCategories.push(newCategory);
    return newCategory;
  },

  // Products
  async getProducts(categoryId?: string): Promise<Product[]> {
    await delay(500);
    if (categoryId) {
      return mockProducts.filter(product => product.category.categoryId === categoryId);
    }
    return mockProducts;
  },

  async getProductById(productId: string): Promise<Product | null> {
    await delay(300);
    return mockProducts.find(product => product.productId === productId) || null;
  },

  async createProduct(product: Omit<Product, 'productId'>): Promise<Product> {
    await delay(500);
    const newProduct: Product = {
      ...product,
      productId: Date.now().toString(),
    };
    mockProducts.push(newProduct);
    return newProduct;
  },

  async updateProduct(productId: string, updates: Partial<Product>): Promise<Product> {
    await delay(500);
    const index = mockProducts.findIndex(p => p.productId === productId);
    if (index === -1) throw new Error('Product not found');
    
    mockProducts[index] = { ...mockProducts[index], ...updates };
    return mockProducts[index];
  },

  async deleteProduct(productId: string): Promise<void> {
    await delay(500);
    const index = mockProducts.findIndex(p => p.productId === productId);
    if (index === -1) throw new Error('Product not found');
    
    mockProducts.splice(index, 1);
  },

  // Rentals
  async getRentals(userId?: string): Promise<Rental[]> {
    await delay(500);
    if (userId) {
      return mockRentals.filter(rental => rental.user.userId === userId);
    }
    return mockRentals;
  },

  async createRental(request: RentalRequest): Promise<Rental> {
    await delay(500);
    const user = await this.getUserById(request.userId);
    const product = await this.getProductById(request.productId);
    
    if (!user || !product) {
      throw new Error('User or product not found');
    }

    const startTime = new Date(request.startTime);
    const endTime = new Date(request.endTime);
    const hours = Math.ceil((endTime.getTime() - startTime.getTime()) / (1000 * 60 * 60));
    const totalAmount = hours * product.hourlyRate;

    const newRental: Rental = {
      rentalId: Date.now().toString(),
      user,
      product,
      startTime: request.startTime,
      endTime: request.endTime,
      totalAmount,
      status: 'active',
    };

    mockRentals.push(newRental);
    return newRental;
  },

  async updateRentalStatus(rentalId: string, status: Rental['status']): Promise<Rental> {
    await delay(300);
    const index = mockRentals.findIndex(r => r.rentalId === rentalId);
    if (index === -1) throw new Error('Rental not found');
    
    mockRentals[index].status = status;
    return mockRentals[index];
  },
};

// Utility function to simulate API delays
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}