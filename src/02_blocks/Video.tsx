const Video = () => {
  return (
    <div className="bg-light mb-1" id="video">
      <div className="p-3 pb-md-4 text-center mb-5">
        <h1 className="display-4 fw-normal mb-3">Na Pratica</h1>
        <p className="fs-5 text-body-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
          aliquam illum suscipit commodi voluptatibus, voluptas placeat minima
          aliquid omnis aut!
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ position: "relative", paddingTop: "56.25%", width: "100%" }}
        >
          <iframe
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/4MFOBeUCPkw?rel=0"
            allowFullScreen
            style={{
              opacity: 0.5,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "60%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
