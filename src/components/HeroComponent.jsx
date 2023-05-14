import imageHero from "../../public/hero-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      className={
        "container p-8 mx-auto min-h-screen flex justify-center items-center"
      }
      id={"top"}
    >
      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
        <div className={"col-span-1 pt-4"}>
          <img
            src={imageHero}
            alt={"image-hero"}
            className={"w-fulll h-full lg:w-[32rem] lg:mx-auto rounded-2xl"}
          />
        </div>
        <div className="col-span-1 flex justify-center flex-col">
          <div className={"text-center md:text-start lg:text-center"}>
            <span className={"text-orange-400 text-lg font-bold"}>
              -- Hai Hai --
            </span>
          </div>
          <h1 className={"text-4xl font-semibold text-slate-600 mb-2"}>
            Selamat Datang Di
            <br />
            <span className={"text-5xl font-bold text-teal-400"}>
              elfooDrink.
            </span>
          </h1>
          <p className={"text-justify mb-4 lg:w-[28rem]"}>
            Sebuah restoran dengan makanan dan minuman beserta snack yang
            membuatmu nagih ingin mencoba lagi dengan suasana yang dapat
            membuatmu tenang.
          </p>
          <div className="flex gap-4">
            <a
              href={""}
              className={
                "p-2 rounded-lg border-2 text-lg text-teal-400 border-teal-400 hover:text-white hover:bg-teal-400 hover:border-white"
              }
            >
              Selengkapnya
            </a>
            <a
              href={""}
              className={
                "p-2 rounded-lg border-2 text-lg text-white border-white bg-teal-400 hover:text-teal-400 hover:bg-white hover:border-teal-400 px-6"
              }
            >
              Menu <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
