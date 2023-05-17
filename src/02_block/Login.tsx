import React from "react";

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
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating m-1">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox m-3 mb-4">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
