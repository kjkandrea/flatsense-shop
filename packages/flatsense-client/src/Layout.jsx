import React from 'react';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

export default function Layout({ children }) {
  return (
    <div className="global-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
