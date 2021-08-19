import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// style
import '../assets/css/main.css';
import 'normalize.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
