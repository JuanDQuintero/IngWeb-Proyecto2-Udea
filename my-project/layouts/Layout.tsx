import Navbar from '@components/Navbar';
import React from 'react';
import Sections from './Sections';

interface LayoutProps {
    children: JSX.Element;
}

const Layout = () => {
    return (
        <main>
            <Navbar /> 
            <Sections />
            
        </main>
    );
}

export default Layout;
