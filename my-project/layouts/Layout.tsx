import Navbar from '@components/Navbar';
import React from 'react';

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <main>
            <Navbar />
            <section>{children}</section>
        </main>
    );
}

export default Layout;
