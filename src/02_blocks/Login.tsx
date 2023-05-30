import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="text-center mt-5 pt-5">
        <main className="d-flex justify-content-center align-items-center m-5">
          <form className="form-signin w-25 mt-5">
            <h1 className="h3 mb-4 fw-normal">Log-in</h1>
            <div className="form-floating m-2">
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
            <div className="form-floating m-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label
                className="text-dark text-opacity-50 ms-2"
                htmlFor="floatingPassword"
              >
                Senha
              </label>
            </div>
            <div className="checkbox m-3 mb-2">
              <label>
                <input type="checkbox" value="remember-me" />
                <span className="p-2">Lembre de mim</span>
              </label>
            </div>
            <div className="mb-4">
              <a href="">Esqueceu a senha?</a>
            </div>
            <Link to="/web-app">
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Log-in
              </button>
            </Link>
            <div className="mt-4 ">
              <p>Precisa de uma conta?</p>
              <Link to="/sign-up">Cadastre-se</Link>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default Login;

// TODO => include "olho" senha
// TODO => include validations
