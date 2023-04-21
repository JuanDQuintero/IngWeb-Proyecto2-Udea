import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface CarritoContextProps {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const CarritoContext = createContext<CarritoContextProps>(
    {} as CarritoContextProps
    );

export const useCarritoContext = () => useContext(CarritoContext);

interface CarritoContextProviderProps {
    children: JSX.Element;
}

const CarritoContextProvider = ({children}:CarritoContextProviderProps) => {
    const [openModal,setOpenModal] = useState<boolean>(false);
    return (
        <CarritoContext.Provider value={{openModal,setOpenModal}}>
            {children}
        </CarritoContext.Provider>
    )
}

export { CarritoContextProvider };
