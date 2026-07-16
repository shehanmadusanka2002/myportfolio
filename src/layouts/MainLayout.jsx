import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-dark transition-colors duration-300 overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
