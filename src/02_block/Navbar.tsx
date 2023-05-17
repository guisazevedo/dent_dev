import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center mt-3 mb-3">
      <a className="nav-link text-dark" href="#">
        [LOGO]
      </a>
      <a className="nav-link text-dark" href="#">
        Home
      </a>{" "}
      <a className="nav-link text-dark" href="#">
        Video
      </a>{" "}
      <a className="nav-link text-dark" href="#">
        FAQ
      </a>
      <a className="nav-link text-dark" href="#">
        Planos
      </a>
      <a className="nav-link text-dark" href="#">
        [SIGN UP]
      </a>
      <a className="nav-link text-dark" href="#">
        [SIGN IN]
      </a>
    </nav>
  );
};

export default Navbar;
