import React from 'react';
import { ProductList } from '../../components/product/ProductList/ProductList';
import { useCart } from '../../hooks/useCart';

export const Home: React.FC = () => {
  const { addItem } = useCart();
  // Aquí irían los productos mock
  const products = [];

  return (
    <div className="home">
      <h1>Productos Destacados</h1>
      <ProductList products={products} onAddToCart={addItem} />
    </div>
  );
}; 