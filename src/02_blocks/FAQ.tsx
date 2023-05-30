const FAQ = () => {
  const questions_items_1 = [
    [
      "Por que ...?",
      "collapseOne",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseTwo",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseThree",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseFour",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseFive",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
  ];

  const questions_items_2 = [
    [
      "Por que ...?",
      "collapseSix",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseSeven",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseEight",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseNine",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
    [
      "Por que ...?",
      "collapseTen",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eum dolore quas possimus, ex odit, est, animi laborum maiores eaque saepe. Iste rerum sit labore nostrum eaque! Maiores temporibus dolores voluptatum, et illo repellendus? Tempore sapiente deleniti corrupti cumque enim?",
    ],
  ];

  return (
    <>
      <div className="p-5 mt-5 bg-light" id="faq">
        <div className="p-3 pb-md-4 mx-auto text-center mb-5">
          <h1 className="display-4 fw-normal mb-3">Perguntas Frenquentes</h1>
          <p className="fs-5 text-body-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
            aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
            aliquid omnis aut!
          </p>
        </div>
        <h3 className="mt-5 mb-3">Topico 01</h3>
        <div className="accordion">
          {questions_items_1.map((item) => (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + item[1]}
                  aria-expanded="false"
                  aria-controls={item[1]}
                >
                  {item[0]}
                </button>
              </h2>
              <div
                id={item[1]}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{item[2]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-5 mb-3">Topico 02</h3>
        <div className="accordion">
          {questions_items_2.map((item) => (
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#" + item[1]}
                  aria-expanded="false"
                  aria-controls={item[1]}
                >
                  {item[0]}
                </button>
              </h2>
              <div
                id={item[1]}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>{item[2]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
