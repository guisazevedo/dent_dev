import "bootstrap/dist/css/bootstrap.css";

const Planos = () => {
  const plan_items = [
    {
      plano: "Gratis",
      price: "R$0",
      time: " / 90 dias",
      use_1: "Use ate 2 PCs",
      use_2: "Material de treinamento",
      use_3: "Acesso Help Center",
      action_button: "Sign-up",
      action_do: "",
      format_bg: "",
      format_border: "",
    },
    {
      plano: "Plano Basico",
      price: "R$100",
      time: " / 50 exames",
      use_1: "Use ate 5 PCs",
      use_2: "Material de aperfeicoamento",
      use_3: "Acesso por email",
      action_button: "Compre",
      action_do: "",
      format_bg: "",
      format_border: "",
    },
    {
      plano: "Plano Economico",
      price: "R$500",
      time: " / 500 exames",
      use_1: "Use ate 10 PCs",
      use_2: "Treinamentos especiais",
      use_3: "Acesso por email 24hrs",
      action_button: "Compre",
      action_do: "",
      format_gb: "text-bg-primary",
      format_border: "border-primary",
    },
  ];

  return (
    <main className="pt-5 bg-light" id="planos">
      <div className="p-5 mx-auto">
        <div className="pricing-header p-5 pb-md-4 mx-auto text-center mb-5">
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
          {plan_items.map((item) => (
            <div className="col p-3">
              <div
                className={
                  "card h-100 mb-4 rounded-3 shadow-sm " + item.format_border
                }
              >
                <div className={"card-header py-3 " + item.format_bg}>
                  <h4 className="my-0 fw-normal">{item.plano}</h4>
                </div>
                <div className="card-body d-flex flex-column">
                  <h1 className="card-title pricing-card-title">
                    {item.price}
                    <small className="text-body-secondary fw-light fs-5">
                      {item.time}
                    </small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-2">
                    <li>{item.use_1}</li>
                    <li>{item.use_2}</li>
                    <li>{item.use_3}</li>
                  </ul>
                  <button
                    type="button"
                    className="w-100 btn btn-lg btn-primary mt-auto mb-2"
                  >
                    {item.action_button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Planos;
