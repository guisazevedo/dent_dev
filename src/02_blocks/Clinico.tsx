import React from "react";

const Clinico = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="p-3 pb-md-4 text-center mt-5">
            <h1 className="display-4 fw-normal mb-3">Analise Clinica</h1>
            <p className="fs-5 text-body-secondary">Inclua até 4 imagens</p>
          </div>
          <div
            className="p-3 mt-5 mb-5 text-center text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded"
            style={{ height: "300px" }}
          >
            <h1 className="m-2 mt-5 p-4">
              <i className="bi bi-cloud-upload"></i>
            </h1>
            <p>Drag &amp; drop até 4 arquivos</p>
          </div>

          <div className="mb-5">
            <label htmlFor="formFileMultiple" className="ms-2 form-label">
              Ou escolha até 4 arquivos
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
          </div>
          <div className="d-grid gap-2 col-10 col-md-6 mx-auto">
            <button className="btn btn-primary m-2" type="button">
              Realizar Análise
            </button>
            <button className="btn btn-outline-danger m-2" type="button">
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinico;

// TODO => make real drag/drop
