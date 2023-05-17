import Navbar from "./02_block/Navbar";
import Carousel from "./02_block/Carousel";
import Planos from "./02_block/Planos";
import FAQ from "./02_block/FAQ";
import Footer from "./02_block/Footer";
import Signin from "./02_block/Signin";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <div className="b-example-divider"></div>
      <Carousel />
      <div className="b-example-divider"></div>
      <FAQ />
      <div className="b-example-divider"></div>
      <Planos />
      {/* <Footer /> */}
      <Signin />
    </div>
  );
}

export default App;
