import React from "react";

const Signup = () => {
  return (
    <div className="container-fluid w-25 text-center">
      <form className="row g-3 needs-validation" noValidate>
        <h1>
          <i className="bi bi-exclude"></i>
        </h1>
        <h1 className="h3 mb-4 fw-normal">Sign-up</h1>
        <div className="form-floating m-1">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Nome</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Sobrenome</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">eMail</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Senha</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Confirme a senha</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">CRO</label>
        </div>
        <div className="form-floating m-1">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">CPF</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign-up
        </button>
        <div className="mt-4 ">
          <p>Precisa de uma conta?</p>
          <a href="">Cadastre-se</a>
        </div>
        <p className="mt-5 mb-5 text-body-secondary">© 2017–2023</p>
      </form>
    </div>
  );
};

export default Signup;
