import Navbar from "../02_blocks/Navbar";
import Carrousel from "../02_blocks/Carousel";
import Footer from "../02_blocks/Footer";
import Video from "../02_blocks/Video";
import FAQ from "../02_blocks/FAQ";
import Contact from "../02_blocks/Contact";
import Planos from "../02_blocks/Planos";

const _page = () => {
  return (
    <>
      <Navbar />
      <Carrousel />
      <Video />
      <FAQ />
      <Contact />
      <Planos />
      <Footer />
    </>
  );
};

export default _page;
