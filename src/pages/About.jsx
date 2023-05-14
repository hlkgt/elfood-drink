import { Fragment } from "react";
import { PropTypes } from "prop-types";
import imageAbout from "../../public/hero-image.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutContent = ({
  cardId,
  photo,
  slogan,
  title,
  text,
  colFirstStart,
  colLastStart,
}) => {
  return (
    <div className={"container px-8 mx-auto pt-40 pb-10 "} id={cardId}>
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-12"}>
        <div className={"col-span-1 " + colFirstStart}>
          <img
            src={photo}
            className={"w-fulll h-full lg:w-[32rem] lg:mx-auto rounded-2xl"}
          />
        </div>
        <div
          className={
            "col-span-1 lg:flex justify-center flex-col " + colLastStart
          }
        >
          <span className={"text-md font-semibold text-orange-400 mb-1"}>
            {slogan}
          </span>
          <h1 className={"text-3xl font-bold text-teal-400 mb-3"}>{title}</h1>
          <p className={"text-slate-800"}>{text}</p>
        </div>
      </div>
    </div>
  );
};
AboutContent.propTypes = {
  photo: PropTypes.string,
  slogan: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  cardId: PropTypes.string,
  colFirstStart: PropTypes.string,
  colLastStart: PropTypes.string,
};

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <AboutContent
        cardId={"top"}
        photo={imageAbout}
        slogan={"-- Mau Tau Kami --"}
        title={"Tentang Kami"}
        text={
          "lorem iposum dolor adakiwlkd popqwowepdma saipoopweld loeklamw kaksldkwojdaljd laowldja,smw djaoiwikodkalsdk wioqaledo lorep msajwooa ksadladqpdxnmka leo jsalksdjqwom jrei riksa sldkadoariska hehehe riskla akgfuasanina leo maerselio"
        }
      />
      <AboutContent
        colFirstStart={"col-start-2"}
        colLastStart={"col-start-1 row-start-1"}
        cardId={"null"}
        photo={imageAbout}
        slogan={"-- Mau Tau Kami --"}
        title={"Tentang Kami"}
        text={
          "lorem iposum dolor adakiwlkd popqwowepdma saipoopweld loeklamw kaksldkwojdaljd laowldja,smw djaoiwikodkalsdk wioqaledo lorep msajwooa ksadladqpdxnmka leo jsalksdjqwom jrei riksa sldkadoariska hehehe riskla akgfuasanina leo maerselio"
        }
      />
      <Footer />
    </Fragment>
  );
};

export default About;
