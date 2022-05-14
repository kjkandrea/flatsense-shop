import React from 'react';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
