import painelControle from "../00_assets/dashboard.jpg";
import carouselClinico from "../00_assets/clinic.jpg";
import { Link } from "react-router-dom";

const WebApp = () => {
  const painel_items = [
    {
      img: painelControle,
      title: "Painel de Controle",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis facilis dolor maxime aspernatur esse tempore quas maiores. Illum, dolores quam?",
      link: "/clinico",
    },
    {
      img: carouselClinico,
      title: "Painel Clinico",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit nemo consequuntur repellendus placeat id, voluptate facere. Quia, quasi harum.",
      link: "/clinico",
    },
  ];

  return (
    <div className="m-5 pt-5 mx-auto">
      <div className="container text-center">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center mb-5">
          <h1 className="display-4 fw-normal mb-3">Painel Principal</h1>
          <p className="fs-5 text-body-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            tenetur dolorum incidunt sed dolores deleniti.
          </p>
        </div>
        <div className="row mb-3">
          {painel_items.map((item) => (
            <div className="col" key={item.title}>
              <div className="card">
                <div
                  className="image-container"
                  style={{ height: "340px", overflow: "hidden" }}
                >
                  <img
                    src={item.img}
                    className="card-img-top opacity-50 h-100"
                    alt="foto dashboard"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title fs-3">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <Link to={item.link}>
                    <button className="btn btn-primary">Entrar</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebApp;
