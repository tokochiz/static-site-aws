// src/pages/about.jsx
import React from 'react';
import Layout from '../components/Layout/Layout';
import Profile from '../components/About/Profile';

const AboutPage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">About</h1>
      <Profile />
    </Layout>
  );
};

export default AboutPage;