import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top p-2">
      <div className="container-fluid">
        <h1>
          <i className="bi bi-exclude text-dark m-3"></i>
        </h1>
        <h3>DentAi</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavHashLink className="nav-link text-dark ms-3" to="/#carousel">
                Principal
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink className="nav-link text-dark ms-3" to="/#video">
                Video
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink className="nav-link text-dark ms-3" to="/#faq">
                FAQ
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink className="nav-link text-dark ms-3" to="/#contato">
                Contato
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink className="nav-link text-dark ms-3" to="/#planos">
                Planos
              </NavHashLink>
            </li>
          </ul>
          <div className="d-flex">
            <NavHashLink className="nav-link" to="/log-in">
              <button className="btn btn-primary me-1" type="button">
                Log-in
              </button>
            </NavHashLink>
            <NavHashLink className="nav-link" to="/sign-up">
              <button className="btn btn-outline-dark ms-1" type="button">
                Sign-up
              </button>
            </NavHashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
