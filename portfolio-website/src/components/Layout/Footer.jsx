// src/components/Layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16"> {/* pt-16 はナビゲーションの高さ分のパディング */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      {/* 必要に応じてフッターを追加 */}
    </div>
  );
};

export default Layout;