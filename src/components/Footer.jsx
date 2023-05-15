import { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const TemplateFooter = ({ title, paragraf }) => {
  return (
    <Fragment>
      <h1 className={"text-3xl text-teal-400 font-bold mb-2"}>{title}</h1>
      <p className={"text-slate-800"}>{paragraf}</p>
    </Fragment>
  );
};
const IconStyle = ({ bgClass, icon }) => {
  return (
    <a
      href={"#"}
      className={
        "w-10 h-10 border-2 rounded-md hover:rounded-full transition-all duration-300 ease-in-out flex justify-center items-center " +
        bgClass
      }
    >
      <FontAwesomeIcon
        icon={icon}
        className={"text-2xl text-white"}
      ></FontAwesomeIcon>
    </a>
  );
};
TemplateFooter.propTypes = {
  title: PropTypes.string.isRequired,
  paragraf: PropTypes.string.isRequired,
};
IconStyle.propTypes = {
  bgClass: PropTypes.string.isRequired,
  icon: PropTypes.object,
};

const Footer = () => {
  return (
    <div className="w-full h-80">
      <div className="container mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 p-4">
          <TemplateFooter
            title={"elfooDrink"}
            paragraf={
              "Tempat Makan Yang Dapat Membuat Hati Kita Senang, Sebesar Apapun Masalahnya Menu Favorit Solusinya ehehehe Menu Favoritnya Kakak"
            }
          />
        </div>
        <div className="col-span-1 p-4">
          <TemplateFooter
            title={"About"}
            paragraf={
              "elfooDrink tempat Makan yang Telah Dibangun Dari Tahun 2023 Yang Menjadi Tempat Makan Yang Paling Populer Dan Memiliki 4 Cabang Di Idonesia, Yang Menjadikanya sangat populer ialah karena makanan yang begitu murah dengan pasangan minuman yang akan menemani kita saat makan nanti pastinya"
            }
          />
        </div>
        <div className="col-span-1 p-4">
          <h1 className={"text-3xl text-teal-400 font-bold mb-2"}>
            Menu Teratas
          </h1>
          <li>Mie Goreng</li>
          <li>Coffe Caramel</li>
          <li>Udang BBQ</li>
        </div>
        <div className="col-span-1 p-4">
          <h1 className={"text-3xl text-teal-400 font-bold mb-2"}>
            Sosial Media
          </h1>
          <div className="flex gap-2">
            <IconStyle bgClass={"bg-black"} icon={faGithub} />
            <IconStyle bgClass={"bg-blue-600"} icon={faFacebook} />
            <IconStyle bgClass={"bg-pink-600"} icon={faInstagram} />
            <IconStyle bgClass={"bg-black"} icon={faTiktok} />
          </div>
        </div>
      </div>
      <div className="h-12 bg-teal-600 flex justify-center items-center">
        <p id={"bottom"} className={"text-white text-lg"}>
          &copy; Copyright All Reverse By Leo Marselio
        </p>
      </div>
    </div>
  );
};

export default Footer;
