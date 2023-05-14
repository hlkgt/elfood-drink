import { Fragment } from "react";
import { PropTypes } from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CardProduct = ({ title, children }) => {
  return (
    <div
      className={
        "col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      }
    >
      <div
        className={
          "col-span-1 md:col-span-2 lg:col-span-4 flex justify-center items-center gap-8"
        }
      >
        <span className={"w-full h-1 bg-orange-400"}></span>
        <h1 className={"text-4xl text-orange-400 font-bold"}>{title}</h1>
        <span className={"w-full h-1 bg-orange-400"}></span>
      </div>
      {children}
    </div>
  );
};
CardProduct.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const ProductList = ({ name, price, rate }) => {
  return (
    <div className={"col-span-1 rounded-md shadow-md p-6 flex flex-col gap-3"}>
      <div className={"flex gap-3"}>
        <img src="../../public/hero-image.jpg" className={"w-20"} />
        <div>
          <h1 className={"text-lg font-semibold"}>{name}</h1>
          <p className={"text-md font-medium"}>Rp.{price}</p>
          <span>{rate}</span>
        </div>
      </div>
      <button
        className={
          "rounded-md py-2 shadow-md bg-orange-500 hover:bg-orange-400 text-white text-md font-medium"
        }
      >
        Add To Cart
      </button>
      <button
        className={
          "rounded-md py-2 shadow-md bg-teal-500 hover:bg-teal-400 text-white text-md font-medium"
        }
      >
        Buy Now
      </button>
    </div>
  );
};
ProductList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  rate: PropTypes.int,
};

const Product = () => {
  return (
    <Fragment>
      <Navbar isShopping={true} />
      <div
        className={
          "container px-8 py-20 mx-auto min-h-screen grid grid-cols-1 gap-8"
        }
        id={"top"}
      >
        <div className={"col-span-1 grid grid-cols-4 gap-28"}>
          <CardProduct title={"Makanan"}>
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
          </CardProduct>
          <CardProduct title={"Minuman"}>
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
          </CardProduct>
          <CardProduct title={"Snack"}>
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
            <ProductList name={"Kentang Krispi"} price={"3000"} rate={4} />
          </CardProduct>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Product;
