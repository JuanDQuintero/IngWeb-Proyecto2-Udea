import React, { useContext, useEffect, useState } from 'react'
import { useCarritoContext } from '@context/CarritoContext'

interface CardItemProps {
  product:{
    id: number,
    name: string,
    price: number,
    src: string,
    alt: string,
    discount: string,
    svg: string
    quantity: number;
  }
}

export default function Cards({ product }: CardItemProps) {
  const { cartItems, setCartItems } = useCarritoContext();
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleAddToCar = () => {
    setCartItems([...cartItems, product]);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3000);
  }
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  
  return (
    <div className='list-card'>
      <button onClick={handleAddToCar} >
        <div className="card hover:opacity-70">
          <img src={product.src} alt={product.alt} />
          <div className="card-precios">
            <div className="precios">
              <span>$ {product.price}</span>
              <span>{product.discount}</span>
            </div>
            <div className="envio">
              <p>Envío gratis</p>
              {product.svg && <img src={product.svg} alt="envio" />}
            </div>
          </div>
        </div>
        
      </button>
      {isToastVisible && (<div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 text-white-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
          <div className="pl-4 text-sm font-normal">{product.name} agregado al carrito</div>
      </div>)}

    </div>
    
  )
}