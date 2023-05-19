import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center p-2 mb-5 fixed-top bg-light">
      <div className="d-flex align-items-center">
        <a className="nav-link text-dark ms-3" href="#">
          <h1>
            <i className="bi bi-exclude"></i>
          </h1>
        </a>
        <a className="nav-link text-dark ms-3" href="#">
          Home
        </a>{" "}
        <a className="nav-link text-dark ms-3" href="#">
          Video
        </a>{" "}
        <a className="nav-link text-dark ms-3" href="#">
          FAQ
        </a>
        <a className="nav-link text-dark ms-3" href="#">
          Planos
        </a>{" "}
        <a className="nav-link text-dark ms-5 me-5" href="#">
          Contato
        </a>
        <div className="row ms-5">
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-primary w-100 ms-2"
            >
              Entre <i className="bi bi-door-open"></i>
            </button>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-outline-secondary w-100 ms-2"
            >
              Log-In <i className="bi bi-box-arrow-in-right"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
