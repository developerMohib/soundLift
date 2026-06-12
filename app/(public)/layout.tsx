import Footer from '@/source/common/Footer';
import Navbar from '@/source/common/Navbar';
import React from 'react';

const publicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto">

            {children}
            </div>
            <Footer />
        </div>
    );
};

export default publicLayout;