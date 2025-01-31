import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <main className="container mt-4">
                {children}
            </main>
        </>
    );
};

export default Layout;