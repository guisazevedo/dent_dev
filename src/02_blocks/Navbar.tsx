import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center p-2 mb-3 fixed-top bg-light">
      <div className="d-flex align-items-center">
        <NavHashLink className="nav-link text-dark ms-3" to="/#carousel">
          <h1>
            <i className="bi bi-exclude"></i>
          </h1>
        </NavHashLink>
        <NavHashLink className="nav-link text-dark ms-3" to="/#carousel">
          Home
        </NavHashLink>{" "}
        <NavHashLink className="nav-link text-dark ms-3" to="/#video">
          Video
        </NavHashLink>{" "}
        <NavHashLink className="nav-link text-dark ms-3" to="/#faq">
          FAQ
        </NavHashLink>
        <NavHashLink className="nav-link text-dark ms-3" to="/#contato">
          Contato
        </NavHashLink>{" "}
        <NavHashLink className="nav-link text-dark ms-3 me-5" to="/#planos">
          Planos
        </NavHashLink>
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
