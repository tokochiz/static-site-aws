// src/pages/index.jsx
import React from 'react';
import Layout from '../components/Layout/Layout';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
      <PortfolioGrid />
    </Layout>
  );
};

export default HomePage;
