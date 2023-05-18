import React from "react";

const Video = () => {
  return (
    <div className="w-75 mx-auto p-5">
      <div className="p-3 pb-md-4 mx-auto text-center mb-5">
        <h1 className="display-4 fw-normal mb-3">Na Pratica</h1>
        <p className="fs-5 text-body-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
          aliquid omnis aut!
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/4MFOBeUCPkw?rel=0"
            allowFullScreen
            width={1000}
            height={450}
            style={{ opacity: 0.5 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
