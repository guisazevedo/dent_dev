import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavHashLink } from "react-router-hash-link";

const Navbar = () => {
  const menu_items = [
    { title: "Principal", link: "/#carousel" },
    { title: "Video", link: "/#video" },
    { title: "FAQ", link: "/#faq" },
    { title: "Contato", link: "/#contato" },
    { title: "Planos", link: "/#planos" },
  ];

  const menu_logs = [
    ["Log-in", "-primary", "/log-in"],
    ["Sign-up", "-outline-dark", "/sign-up"],
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top px-5 py-3">
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
            {menu_items.map((item) => (
              <li className="nav-item">
                <NavHashLink className="nav-link text-dark ms-3" to={item.link}>
                  {item.title}
                </NavHashLink>
              </li>
            ))}
          </ul>

          <div className="d-flex">
            {menu_logs.map((item) => (
              <NavHashLink className="nav-link" to={item[2]}>
                <button className={"btn btn" + item[1] + " mx-1"} type="button">
                  {item[0]}
                </button>
              </NavHashLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
