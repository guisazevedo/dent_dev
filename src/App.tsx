import Navbar from "./02_block/Navbar";
import Carousel from "./02_block/Carousel";
import Planos from "./02_block/Planos";
import FAQ from "./02_block/FAQ";
import Footer from "./02_block/Footer";

function App() {
  return (
    <div className="m-5">
      <Navbar />
      <Carousel />
      <Planos />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
