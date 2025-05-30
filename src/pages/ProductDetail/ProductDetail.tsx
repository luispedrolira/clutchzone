import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { Button } from '../../components/ui/Button/Button';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  // Aquí iría la lógica para obtener el producto por ID
  console.log('Product ID:', id);
  const product = null;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail__content">
        <h1>{product.name}</h1>
        <p className="product-detail__price">${product.price}</p>
        <p className="product-detail__description">{product.description}</p>
        <Button onClick={() => addItem(product)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}; 