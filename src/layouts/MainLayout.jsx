import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--bg,#F8FAFC)] text-dark transition-colors duration-300">
      <Navbar />
      <main className="pt-2 md:pt-6 lg:pt-10">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
