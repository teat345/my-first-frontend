// pages/index.js or wherever your Home component is
"use client";

import { useEffect } from "react";
import Navbar from "./components/Header";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ProductSlider from "./components/ProductSlider";

const products = [
  {
    name: 'Product 1',
    description: 'This is a great product!',
    price: 25.99,
    image: '/productimages/product1.jpg',
  },
  {
    name: 'Product 2',
    description: 'Another amazing product.',
    price: 39.99,
    image: '/productimages/product2.jpg',
  },
  {
    name: 'Product 3',
    description: 'Best product in the market.',
    price: 49.99,
    image: '/productimages/product3.jpg',
  },
  {
    name: 'Product 4',
    description: 'Best product in the market.',
    price: 50.99,
    image: '/productimages/product4.jpg',
  },
  {
    name: 'Product 5',
    description: 'Best product in the market.',
    price: 60.99,
    image: '/productimages/product5.jpg',
  },
];

export default function Home() {
  useEffect(() => {
    // Dynamically load Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <Slider />

      
        <ProductSlider products={products} />
      

      {/* Footer */}
      <Footer />
    </>
  );
}
