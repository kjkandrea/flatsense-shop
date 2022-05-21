import React from 'react';
import Header from './components/global/Header';
import Footer from './components/global/Footer';

export default function Layout({ children }) {
  return (
    <div className="global-wrapper">
      <Header />
      <div className="p-4">{children}</div>
      <Footer />
    </div>
  );
}
