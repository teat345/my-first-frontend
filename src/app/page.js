"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // Dynamically load Bootstrap JS
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div id="carouselExample" className="carousel slide my-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/image1.jpg" // Replace with your image path
              className="d-block w-100"
              alt="Slide 1"
              width={500}
              height={600}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/image2.jpg" // Replace with your image path
              className="d-block w-100"
              alt="Slide 2"
              width={500}
              height={600}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/image3.jpg" // Replace with your image path
              className="d-block w-100"
              alt="Slide 3"
              width={500}
              height={600}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 bg-light">
        <p>© 2025 Company, Inc</p>
      </footer>
   
    </>
  );
}
