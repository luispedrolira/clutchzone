import React from 'react';
import { useCart } from '../../../hooks/useCart';

export const CartButton: React.FC = () => {
  const { items } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <button className="cart-button">
      <span className="cart-button__icon">🛒</span>
      {itemCount > 0 && (
        <span className="cart-button__count">{itemCount}</span>
      )}
    </button>
  );
}; 