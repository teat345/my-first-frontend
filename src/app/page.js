import Image from "next/image";
import styles from "./page.module.css";
import CustomSlider from "./slider";



export default function Home() {
  return (
    <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Contact-us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

     {/* Main Content Section */}
     <section id="hero" className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Our Website</h1>
          <p className="lead">Explore amazing features and services</p>
          <a href="#features" className="btn btn-light btn-lg">
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <h3>Feature One</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature Two</h3>
              <p>Nulla aliquet quam ut quam placerat, a porttitor libero tempus.</p>
            </div>
            <div className="col-md-4">
              <h3>Feature Three</h3>
              <p>Vestibulum sit amet orci fermentum, tincidunt neque sed, egestas lorem.</p>
            </div>
          </div>
        </div>
      </section>

  <CustomSlider/>
  
    {/* Footer */}
    <footer className="py-3 my-4 bg-body-tertiary">
      <div className="container-fluid">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2021 Company, Inc</p>
      </div>
    </footer>
  </div>
  
  );
}