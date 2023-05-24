import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Carrousel = () => {
  return (
    <div className="w-75 mx-auto p-5 mt-5">
      <div className="p-3 pb-md-4 mx-auto text-center mb-5">
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
            <div className="carousel-item carousel-item-next carousel-item-start">
              <img
                src="../assets/carousel_01.jpg"
                className="d-block w-100 mx-auto opacity-25"
                alt="Carousel_01"
              />
              <div className="container">
                <div className="carousel-caption text-start text-dark">
                  <h1>Example headline.</h1>
                  <p>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="../assets/carousel_02.jpg"
                className="d-block w-100 mx-auto opacity-25"
                alt="Carousel_02"
              />
              <div className="container">
                <div className="carousel-caption text-dark">
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item active carousel-item-start">
              <img
                src="../assets/carousel_03.jpg"
                className="d-block w-100 mx-auto opacity-25"
                alt="Carousel_03"
              />
              <div className="container">
                <div className="carousel-caption text-end text-dark">
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
