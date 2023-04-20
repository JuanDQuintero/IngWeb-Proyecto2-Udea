import Navbar from '@components/Navbar';
import React from 'react';
import Sections from './Sections';
import Footer from '@components/Footer';

interface LayoutProps {
    children: JSX.Element;
}

const Layout = () => {
    return (
        <main>
            <Navbar /> 
            <Sections />
            <Footer />
        </main>
    );
}

export default Layout;
