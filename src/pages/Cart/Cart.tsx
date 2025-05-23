import React from 'react';
import { CartItem } from '../../components/cart/CartItem/CartItem';
import { useCart } from '../../hooks/useCart';
import { Button } from '../../components/ui/Button/Button';

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {items.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.product.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <Button onClick={clearCart}>Vaciar Carrito</Button>
            <Button>Comprar</Button>
          </div>
        </>
      )}
    </div>
  );
}; 