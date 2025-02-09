// src/components/Footer/Footer.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().gevcFullYear();
    
    return (
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-600">
                Web開発とデザインに特化したポートフォリオサイトです。
                創造的なソリューションを提供することを心がけています。
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-600 hover:text-gray-900">Portfolio</a>
                </li>
                <li>
                  <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
                </li>
                <li>
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900">Contact</a>
                </li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-600 hover:text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;