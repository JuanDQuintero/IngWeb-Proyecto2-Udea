import Navbar from '@components/Navbar';
import React from 'react';
import Sections from './Sections';
import Footer from '@components/Footer';
import CarritoContextProvider  from '@context/CarritoContext';


const Layout = () => {
    return (
        <main >
            <CarritoContextProvider>
                <div>
                    <Navbar /> 
                    <Sections />
                    <Footer />
                </div>
            </CarritoContextProvider>

        </main>
    );
}

export default Layout;
