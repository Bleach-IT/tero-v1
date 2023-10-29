import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';

function App() {
  return (
    < >
      <Navbar/>
      <Hero/>
      <About />
      <Product />
      <Footer />
    </>
  );
}

export default App;
