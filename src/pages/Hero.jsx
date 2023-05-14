import { Fragment} from "react";
import Navbar from "../components/Navbar";
import HeroComponent from "../components/HeroComponent";
import TentangKami from "../components/TentangKami";
import MenuFavorit from "../components/MenuFavoritComponent";
import TestimoniKonsumen from "../components/TestimoniKonsumen";
import Footer from "../components/Footer";

const Hero = () => {

  return (
    <Fragment>
      <Navbar />
      <HeroComponent />
      <TentangKami />
      <MenuFavorit />
      <TestimoniKonsumen />
      <Footer />
    </Fragment>
  );
};

export default Hero;
