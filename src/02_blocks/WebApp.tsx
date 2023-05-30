import painelControle from "../00_assets/dashboard.jpg";
import carouselClinico from "../00_assets/clinic.jpg";
import { Link } from "react-router-dom";

const WebApp = () => {
  return (
    <div className="m-5 w-75 mx-auto">
      <div className="container text-center">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center mb-5">
          <h1 className="display-4 fw-normal mb-3">Painel Principal</h1>
          <p className="fs-5 text-body-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            tenetur dolorum incidunt sed dolores deleniti.
          </p>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src={painelControle}
                className="card-img-top opacity-75"
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
                <Link to="/clinico">
                  <button className="btn btn-primary">Entrar</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={carouselClinico}
                className="card-img-top opacity-50"
                alt="foto clinica"
                style={{ height: 400 }}
              />
              <div className="card-body">
                <h5 className="card-title fs-3">Painel Clinico</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  odit nemo consequuntur repellendus placeat id, voluptate
                  facere. Quia, quasi harum.
                </p>
                <Link to="/clinico">
                  <button className="btn btn-primary">Entrar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
