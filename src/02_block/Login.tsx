const Login = () => {
  return (
    <div className="text-center">
      <main className="d-flex justify-content-center align-items-center m-5">
        <form className="form-signin w-25 mt-5">
          <h1>
            <i className="bi bi-exclude"></i>
          </h1>
          <h1 className="h3 mb-4 fw-normal">Log-in</h1>
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
              Lembre de mim
            </label>
          </div>
          <div className="mb-4">
            <a href="">Esqueceu a senha?</a>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Log-in
          </button>
          <div className="mt-4 ">
            <p>Precisa de uma conta?</p>
            <a href="">Cadastre-se</a>
          </div>
          <p className="mt-5 mb-5 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;

// TODO => space between square and Lembre
