import Navbar from '@components/Navbar';
import React from 'react';
import Sections from './Sections';
import Footer from '@components/Footer';
import CarritoContextProvider  from '@context/CarritoContext';


const Layout = () => (
        <main className='overflow-auto max-w-screen-md'>
            <CarritoContextProvider>
                <div>
                    <Navbar /> 
                    <Sections />
                    <Footer />
                </div>
            </CarritoContextProvider>

        </main>
)


export default Layout;
