const Contact = () => {
  return (
    <div className="mx-auto p-5 bg-light" id="contato">
      <div className="p-3 pb-md-4 mx-auto text-center mb-5">
        <h1 className="display-4 fw-normal mb-3">Entre em Contato</h1>
        <p className="fs-5 text-body-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
          aliquid omnis aut!
        </p>
      </div>
      <form className="w-75 mx-auto">
        {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example1">
            Nome completo
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>

        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example2">
            Email
          </label>
          <input type="email" id="form4Example2" className="form-control" />
        </div>

        {/* <!-- Message input --> */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="form4Example3"
            rows={4}
          ></textarea>
        </div>

        {/* <!-- Checkbox --> */}
        <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <div className="container p-5"></div>
        <button type="submit" className="btn btn-primary btn-block mb-4 px-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
