import React from 'react';
import { CartButton } from '../../cart/CartButton/CartButton';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>ClutchZone</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
        </ul>
      </nav>
      <div className="header__actions">
        <CartButton />
      </div>
    </header>
  );
}; 