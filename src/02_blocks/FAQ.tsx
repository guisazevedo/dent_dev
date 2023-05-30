const FAQ = () => {
  const questions_items_1 = [
    {
      question: "Por que ...?",
      collapse: "collapseOne",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseTwo",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseThree",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseFour",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseFive",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
  ];

  const questions_items_2 = [
    {
      question: "Por que ...?",
      collapse: "collapseSix",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseSeven",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseEight",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseNine",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
    {
      question: "Por que ...?",
      collapse: "collapseTen",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    },
  ];

  return (
    <>
      <div className="pt-5 bg-light" id="faq">
        <div className="pt-3 pb-md-4 mx-auto text-center mb-1">
          <h1 className="display-4 fw-normal mb-3">Perguntas Frenquentes</h1>
          <p className="fs-5 text-body-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
            aliquid omnis aut!
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="mt-5 mb-3">Topicos Tecnicos</h3>
            <div className="accordion">
              {questions_items_1.map((item) => (
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#" + item.collapse}
                      aria-expanded="false"
                      aria-controls={item.collapse}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.collapse}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="mt-5 mb-3">Topicos Comerciais</h3>
            <div className="accordion">
              {questions_items_2.map((item) => (
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#" + item.collapse}
                      aria-expanded="false"
                      aria-controls={item.collapse}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.collapse}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
