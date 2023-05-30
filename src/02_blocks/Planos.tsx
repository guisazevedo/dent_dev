import "bootstrap/dist/css/bootstrap.css";

const Planos = () => {
  return (
    <main className="mt-5 mb-5 bg-light" id="planos">
      <div className="w-75 mx-auto">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center mb-5">
          <h1 className="display-4 fw-normal mb-3">Planos</h1>
          <p className="fs-5 text-body-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            facere distinctio deserunt laudantium ut fuga itaque, nisi dolores
            quibusdam dolorum. Odit labore, rerum fuga accusantium natus
            quibusdam quisquam, autem ex est obcaecati pariatur deleniti
            temporibus quaerat! Voluptatem deserunt doloremque laborum?
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col p-3">
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Gratis</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  R$0
                  <small className="text-body-secondary fw-light fs-5">
                    / 90 dias
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-2">
                  <li>Use ate 2 PCs</li>
                  <li>Material de treinamento</li>
                  <li>Acesso Help Center</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary mt-auto mb-2"
                >
                  Sign-up
                </button>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="card h-100 mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Plano Basico</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  R$100
                  <small className="text-body-secondary fw-light fs-5">
                    / 50 exames
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-2">
                  <li>Use ate 5 PCs</li>
                  <li>Material de aperfeicoamento</li>
                  <li>Acesso por email</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-primary mt-auto mb-2"
                >
                  Compre
                </button>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="card h-100 mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Plano Economico</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title">
                  R$500
                  <small className="text-body-secondary fw-light fs-5">
                    / 500 exames
                  </small>
                </h1>
                <ul className="list-unstyled mt-3 mb-2">
                  <li>Use ate 10 PCs</li>
                  <li>Treinamentos especiais</li>
                  <li>Acesso por email 24hrs</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-primary mt-auto mb-2"
                >
                  Compre
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Planos;
