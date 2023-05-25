import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center p-2 mb-3 fixed-top bg-light">
      <div className="d-flex align-items-center">
        <a className="nav-link text-dark ms-3" href="#">
          <h1>
            <i className="bi bi-exclude"></i>
          </h1>
        </a>
        <Link className="nav-link text-dark ms-3" to="/">
          Home
        </Link>{" "}
        <a className="nav-link text-dark ms-3" href="#">
          Video
        </a>{" "}
        <a className="nav-link text-dark ms-3" href="#">
          FAQ
        </a>
        <a className="nav-link text-dark ms-3" href="#">
          Contato
        </a>{" "}
        <a className="nav-link text-dark ms-3 me-5" href="#">
          Planos
        </a>
        <div className="row ms-5">
          <div className="col">
            <Link to="/sign-up">
              <button
                type="button"
                className="btn btn-outline-primary w-100 ms-2"
              >
                Entre <i className="bi bi-door-open"></i>
              </button>
            </Link>
          </div>
          <div className="col">
            <Link to="/log-in">
              <button
                type="button"
                className="btn btn-outline-secondary w-100 ms-2"
              >
                Log-In <i className="bi bi-box-arrow-in-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// TODO => create intra page links for Video / FAQ / Contato / Planos
// TODO => fix layout
