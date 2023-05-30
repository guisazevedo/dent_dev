import { Link } from "react-router-dom";
//import { NavHashLink } from "react-router-hash-link";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import carouselImage_01 from "../00_assets/carousel_01.jpg";
import carouselImage_02 from "../00_assets/carousel_02.jpg";
import carouselImage_03 from "../00_assets/carousel_03.jpg";

const Carrousel = () => {
  const carousel_items = [
    {
      title: "Seu assistente virtual.",
      text: "Melhore a assertividade de suas analises clinicas.",
      text_place: "text-start",
      action: "Sign-up",
      image: carouselImage_01,
      to: "/sign-up",
      carousel_format: "carousel-item-next carousel-item-start",
    },
    {
      title: "Facil de usar - direto e rapido.",
      text: "Precisao do diagnostico, em segundos.",
      text_place: "",
      action: "Perguntas Frequentes",
      image: carouselImage_02,
      to: "/#faq",
      carousel_format: "",
    },
    {
      title: "Duvidas? Comentarios?",
      text: "Gostariamos de ouvir de voce.",
      text_place: "text-end",
      action: "Contato",
      image: carouselImage_03,
      to: "/#contato",
      carousel_format: "active carousel-item-start",
    },
  ];

  return (
    <div className="w-100 mt-5 pt-5" id="carousel">
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal mb-3">
          Sua Segunda Opiniao Digital
        </h1>
        <p className="fs-5 text-body-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
          aliquid omnis aut!
        </p>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <div
          id="myCarousel"
          className="carousel slide pointer-event"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner">
            {carousel_items.map((item) => (
              <div
                className={
                  "carousel-item " + item.carousel_format + " image-container"
                }
              >
                <img
                  src={item.image}
                  className="d-block w-100 mx-auto opacity-25"
                  alt="Carousel_picture"
                />
                <div className="container">
                  <div
                    className={
                      "carousel-caption " + item.text_place + " text-dark"
                    }
                  >
                    <h1>{item.title}</h1>
                    <p>{item.text}</p>
                    <p>
                      <Link className="btn btn-lg btn-primary" to={item.to}>
                        {item.action}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <script
          src="/docs/5.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </div>
    </div>
  );
};

export default Carrousel;

// TODO => make pictures smallers in memory
// TODO => make margin top for headers - sign-up
