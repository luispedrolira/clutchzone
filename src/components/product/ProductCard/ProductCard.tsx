import React from 'react';
import type { Product } from '../../../types';
import { Button } from '../../ui/Button/Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">${product.price}</p>
        <Button onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}; 