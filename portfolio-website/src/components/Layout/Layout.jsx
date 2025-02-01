// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-sm p-4 fixed w-full z-10">
          <div className="max-w-6xl mx-auto flex justify-end space-x-8">
            <a 
              href="/" 
              className="text-gray-600 hover:text-gray-900"
            >
              Portfolio
            </a>
            <a 
              href="/about" 
              className="text-gray-600 hover:text-gray-900"
            >
              About
            </a>
          </div>
        </nav>
        
        <main className="flex-grow pt-16">
          <div className="max-w-6xl mx-auto px-4 py-8">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    );
  };
  
  export default Layout;