import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top p-2">
      <div className="container-fluid mx-5 my-2">
        <h1>
          <i className="bi bi-exclude text-dark m-3"></i>
        </h1>
        <h3>DentAi</h3>
        <button
          className="btn-sm navbar-toggler"
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
          <div className="row">
            <div className="col-6">
              <NavHashLink className="nav-link" to="/log-in">
                <button className="btn btn-primary col-12 m-1" type="button">
                  Log-in
                </button>
              </NavHashLink>
            </div>
            <div className="col-6">
              <NavHashLink className="nav-link" to="/sign-up">
                <button
                  className="btn btn-outline-dark col-12 m-1"
                  type="button"
                >
                  Sign-up
                </button>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    // <nav className="nav justify-content-center p-2 mb-3 fixed-top bg-light">
    //   <div className="d-flex align-items-center">
    //     <NavHashLink className="nav-link text-dark ms-3" to="/#carousel">
    //       <h1>
    //         <i className="bi bi-exclude"></i>
    //       </h1>
    //     </NavHashLink>
    //     <NavHashLink className="nav-link text-dark ms-3" to="/#carousel">
    //       Home
    //     </NavHashLink>{" "}
    //     <NavHashLink className="nav-link text-dark ms-3" to="/#video">
    //       Video
    //     </NavHashLink>{" "}
    //     <NavHashLink className="nav-link text-dark ms-3" to="/#faq">
    //       FAQ
    //     </NavHashLink>
    //     <NavHashLink className="nav-link text-dark ms-3" to="/#contato">
    //       Contato
    //     </NavHashLink>{" "}
    //     <NavHashLink className="nav-link text-dark ms-3 me-5" to="/#planos">
    //       Planos
    //     </NavHashLink>
    //     <div className="row ms-5">
    //       <div className="col">
    //         <Link to="/sign-up">
    //           <button
    //             type="button"
    //             className="btn btn-outline-primary w-100 ms-2"
    //           >
    //             Entre <i className="bi bi-door-open"></i>
    //           </button>
    //         </Link>
    //       </div>
    //       <div className="col">
    //         <Link to="/log-in">
    //           <button
    //             type="button"
    //             className="btn btn-outline-secondary w-100 ms-2"
    //           >
    //             Log-In <i className="bi bi-box-arrow-in-right"></i>
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;

// TODO => fix layout -> headers hidden under navbar
// TODO => fix headers -> log-in / Sing-up size
// TODO => fix screen / phone
