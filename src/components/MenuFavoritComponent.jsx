import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import imageUser from "../assets/hero-image.jpg";
import Rate from "./Rate";

const CardMenuFavorit = ({ name, price, rate }) => {
  return (
    <div
      className={
        "hover:translate-y-3 cursor-pointer hover:bg-teal-400 hover:text-white w-full rounded-xl shadow-lg border-2 border-slate-400 p-8 flex flex-col gap-8 transition-tranform duration-300 ease-in-out"
      }
    >
      <div className="flex justify-center items-center gap-4">
        <img src={imageUser} alt="image-user" className={"w-20"} />
        <div className="flex flex-col gap-2">
          <h1 className={"text-lg font-semibold"}>{name}</h1>
          <p>Rp.{price}</p>
          <Rate rate={rate} />
          <Link
            to={"/product"}
            className={
              "py-1 px-3 rounded-lg bg-orange-400 hover:bg-orange-600 transition-all duration-300 ease-in-out text-white mx-auto"
            }
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};
CardMenuFavorit.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
};

const MenuFavorit = () => {
  return (
    <div className="container px-8 mx-auto pt-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className={"text-center mb-2"}>
            <span className={"text-orange-400 text-lg font-bold"}>
              -- Pilihan Consumen --
            </span>
          </div>
          <h1 className={"text-center text-xl font-bold text-slate-600"}>
            Menu Favorit
          </h1>
          <p className={"text-center text-md"}>
            Menu favorit rekomendasi consumen yang mungkin anda suka, dan murah
            dikantong pastinya
          </p>
        </div>
        <div className={"col-span-1"}>
          <CardMenuFavorit name={"Nasi Goreng"} price={12000} rate={5} />
        </div>
        <div className={"col-span-1"}>
          <CardMenuFavorit name={"Coffe Caramel"} price={7000} rate={5} />
        </div>
        <div
          className={
            "col-span-1  md:col-span-2 md:mx-auto lg:mx-0 lg:col-span-1"
          }
        >
          <CardMenuFavorit name={"Udang BBQ"} price={8000} rate={5} />
        </div>
      </div>
    </div>
  );
};

export default MenuFavorit;
