export default function Home() {
  return (
    <div>
      {/* navbar */}
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

      <footer className='py-3 my-4'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Features
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Pricing
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              FAQs
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              About
            </a>
          </li>
        </ul>
        <p className='text-center text-muted'>© 2025 Company, Inc</p>
      </footer>
      </div>
  );
}