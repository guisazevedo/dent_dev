const WebApp = () => {
  return (
    <div className="m-5">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="src/assets/dashboard.jpg"
                className="card-img-top"
                alt="foto dashboard"
                style={{ height: 400 }}
              />
              <div className="card-body">
                <h5 className="card-title fs-3">Painel de Controle</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  facilis dolor maxime aspernatur esse tempore quas maiores.
                  Illum, dolores quam?
                </p>
                <a href="#" className="btn btn-primary">
                  Entrar
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="src/assets/clinic.jpg"
                className="card-img-top"
                alt="foto clinica"
                style={{ height: 400 }}
              />
              <div className="card-body">
                <h5 className="card-title fs-3">Clinica</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  odit nemo consequuntur repellendus placeat id, voluptate
                  facere. Quia, quasi harum.
                </p>
                <a href="#" className="btn btn-primary">
                  Entrar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
