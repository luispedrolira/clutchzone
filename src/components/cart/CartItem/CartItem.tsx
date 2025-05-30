import React from 'react';
import type { CartItem as CartItemType } from '../../../types';
import { Button } from '../../ui/Button/Button';

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="cart-item">
      <img src={item.product.image} alt={item.product.name} className="cart-item__image" />
      <div className="cart-item__content">
        <h3>{item.product.name}</h3>
        <p>${item.product.price}</p>
        <div className="cart-item__quantity">
          <Button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}>-</Button>
          <span>{item.quantity}</span>
          <Button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}>+</Button>
        </div>
        <Button onClick={() => onRemove(item.product.id)}>Eliminar</Button>
      </div>
    </div>
  );
}; 