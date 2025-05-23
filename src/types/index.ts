export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  discount?: number;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
} 