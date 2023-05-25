// TODO => incluir 2FA
// COMMENT => addres+ to be added during operations => more points

import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container-fluid w-25 text-center mt-5">
      <form className="row g-3 needs-validation" noValidate>
        <h1 className="h3 mb-4 fw-normal">Sign-up</h1>
        <div className="form-floating m-1">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com" // TODO => why is this not working? same below
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            Nome
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            Sobrenome
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            eMail
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            Senha
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            Confirme a senha
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="text" //TODO => incluir xx.xxx.xxx-xx
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            CRO
          </label>
        </div>
        <div className="form-floating m-1">
          <input
            type="text" //TODO => incluir xx.xxx.xxx-xx
            className="form-control text-opacity-50"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label
            className="text-dark text-opacity-50 ms-2"
            htmlFor="floatingInput"
          >
            CPF
          </label>
        </div>
        <div className="checkbox m-3 mb-2">
          <label>
            <input type="checkbox" value="remember-me" />
            Concordo com termos e condicoes
          </label>
        </div>
        <Link to="/web-app">
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign-up
          </button>
        </Link>
        <div className="mt-4 ">
          <p>Ja possui uma conta?</p>
          <a href="">Log-in</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;

// TODO => include tooltips for fields
// TODO => space between square and Concordo
// TODO => include "olho" senha
// TODO => include validations
