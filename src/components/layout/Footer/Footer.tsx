import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>ClutchZone</h3>
          <p>Tu tienda de productos gaming</p>
        </div>
        <div className="footer__section">
          <h4>Enlaces</h4>
          <ul>
            <li>Sobre nosotros</li>
            <li>Contacto</li>
            <li>Términos y condiciones</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 ClutchZone. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}; 