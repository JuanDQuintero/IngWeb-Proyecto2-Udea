import React, { useContext, useEffect, useState } from 'react';
import { useCarritoContext } from '@context/CarritoContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CardItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    src: string;
    alt: string;
    discount: string;
    svg: string;
  };
}

export default function Cards({ product }: CardItemProps) {
  const { cartItems, setCartItems } = useCarritoContext();

  const handleAddToCar = () => {
    setCartItems([...cartItems, product]);
    toast.success('Producto agregado al carrito');
  };

  return (
    <div className='list-card'>
      <button onClick={handleAddToCar}>
        <div className='card hover:opacity-70'>
          <img src={product.src} alt={product.alt} />
          <div className='card-precios'>
            <div className='precios'>
              <span>$ {product.price}</span>
              <span>{product.discount}</span>
            </div>
            <div className='envio'>
              <p>Envío gratis</p>
              {product.svg && <img src={product.svg} alt='envio' />}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
