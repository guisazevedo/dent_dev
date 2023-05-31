import { Link } from "react-router-dom";

const PasswordNew = () => {
  return (
    <div>
      <div className="text-center mt-5 pt-5">
        <main className="d-flex justify-content-center align-items-center m-5">
          <form className="form-signin col-lg-3 col-md-6 col-sm-8 col-10 mt-5">
            <h1 className="h3 mb-4 fw-normal">Mude sua senha</h1>

            <div className="form-floating m-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword_1"
                placeholder="Password"
              />
              <label
                className="text-dark text-opacity-50 ms-2"
                htmlFor="floatingPassword"
              >
                Nova Senha
                <i className="bi bi-eye-slash-fill"></i>
              </label>
            </div>
            <div className="form-floating m-2">
              <input
                type="password"
                className="form-control"
                id="floatingPassword_2"
                placeholder="Password"
              />
              <label
                className="text-dark text-opacity-50 ms-2"
                htmlFor="floatingPassword"
              >
                Nova Senha
                <i className="bi bi-eye-slash-fill"></i>
              </label>
            </div>

            <Link to="/web-app">
              <button
                className="w-100 btn btn-lg btn-primary mt-4"
                type="submit"
              >
                Registre nova senha
              </button>
            </Link>
          </form>
        </main>
      </div>
    </div>
  );
};

export default PasswordNew;

//TODO => avisar senha igual / fraca / olho
