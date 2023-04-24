import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

import { toast } from 'react-toastify';

interface CartItem {
  id: number;
  name: string;
  price: number;
  src: string;
  alt: string;
  discount: string;
  svg: string;
  quantity: number;
}

interface CarritoContextProps {
  cartItems: CartItem[];
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: number) => void;
}

const CarritoContext = createContext<CarritoContextProps>({
  cartItems: [],
  setCartItems: () => {},
  addItem: () => {},
  removeItem: () => {},
});

export const useCarritoContext = () => useContext(CarritoContext);

interface CarritoContextProviderProps {
  children: JSX.Element;
}

const CarritoContextProvider = ({ children }: CarritoContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (itemIndex === -1) {
      // Si el item no estaba en el carrito, lo agregamos con cantidad 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      // Si el item ya estaba en el carrito, incrementamos su cantidad en 1
      const updatedCartItems = [...cartItems];
      updatedCartItems[itemIndex].quantity++;
      setCartItems(updatedCartItems);
    }
    toast.success('Producto agregado al carrito');
  };

  const removeItem = (itemId: number) => {
    const itemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    if (itemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[itemIndex].quantity === 1) {
        // Si la cantidad del item es 1, lo eliminamos del carrito
        updatedCartItems.splice(itemIndex, 1);
      } else {
        // Si la cantidad del item es mayor a 1, simplemente disminuimos la cantidad en 1
        updatedCartItems[itemIndex].quantity--;
      }
      setCartItems(updatedCartItems);
      toast.info('Producto eliminado del carrito');
    }
  };
  return (
    <CarritoContext.Provider value={{ cartItems, setCartItems, addItem, removeItem }}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoContextProvider;
