import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface CartItem {
  id: number,
  name: string,
  price: number,
  src: string,
  alt: string,
  discount: string,
  svg: string,

}

interface CarritoContextProps {
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  removeItem: (itemId: number) => void;
}

const CarritoContext = createContext<CarritoContextProps>({
  cartItems: [],
  setCartItems: () => {},
  removeItem: () => {},
});

export const useCarritoContext = () => useContext(CarritoContext);

interface CarritoContextProviderProps {
    children: JSX.Element;
}

const CarritoContextProvider = ({children}:CarritoContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const removeItem = (itemId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  }
  return (
    <CarritoContext.Provider value={{ cartItems, setCartItems, removeItem }}>
      {children}
    </CarritoContext.Provider>
  );   
}

export default CarritoContextProvider ;