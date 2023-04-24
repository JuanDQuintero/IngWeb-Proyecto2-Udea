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
    quantity: number;
  };
}

export default function Cards({ product }: CardItemProps) {
  const { cartItems, setCartItems } = useCarritoContext();

  const handleAddToCar = () => {
    const itemIndex = cartItems.findIndex(item => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += 1;
      setCartItems(updatedCart);
      toast.success('Se agregó una unidad del producto al carrito');
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
      toast.success('Producto agregado al carrito');
    } 
  };

  return (
    <div className=''>
      <button onClick={handleAddToCar}>
        <div className='card hover:drop-shadow-xl hover:shadow-xl'>
          <img src={product.src} alt={product.alt} />
          <div className='p-4 border-t'>
            <div className='precios flex items-center'>
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
