import Navbar from "./02_block/Navbar";
import Carousel from "./02_block/Carousel";
import Planos from "./02_block/Planos";
import Video from "./02_block/Video";
import FAQ from "./02_block/FAQ";
import Contact from "./02_block/Contact";
import Login from "./02_block/Login";
import Signup from "./02_block/Signup";
import WebApp from "./02_block/WebApp";
import Clinico from "./02_block/Clinico";
import Termosuso from "./02_block/Termosuso";
import Documentation from "./02_block/Documentation";
import Footer from "./02_block/Footer";

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <div className="b-example-divider"></div>
      <Carousel />
      <div className="b-example-divider"></div>
      <Video />
      <div className="b-example-divider"></div>
      <FAQ />
      <div className="b-example-divider"></div>
      <Contact />
      <div className="b-example-divider"></div>
      <Planos />
      <Login />
      <div className="b-example-divider"></div>
      <Signup />
      <div className="b-example-divider"></div>
      <WebApp />
      <div className="b-example-divider"></div>
      <Clinico />
      <div className="b-example-divider"></div>
      <Termosuso />
      <div className="b-example-divider"></div>
      <Documentation />
      <div className="b-example-divider"></div>
      <Footer />
    </div>
  );
}

export default App;
