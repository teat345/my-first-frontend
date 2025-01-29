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
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Product 2',
    description: 'Another amazing product.',
    price: 39.99,
    image: 'https://via.placeholder.com/300',
  },
  {
    name: 'Product 3',
    description: 'Best product in the market.',
    price: 49.99,
    image: 'https://via.placeholder.com/300',
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

      <div>
        <h1>Product Slider</h1>
        <ProductSlider products={products} />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
