import { Fragment, useState } from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageProduct from "../assets/hero-image.jpg";

const CardProduct = ({ title, children }) => {
  return (
    <div
      className={
        "col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      }
    >
      <div
        className={
          "col-span-1 md:col-span-2 lg:col-span-4 flex justify-center items-center gap-2 md:gap-4 lg:gap-8"
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

const ProductList = ({ name, price, rate, children }) => {
  return (
    <div className={"col-span-1 rounded-md shadow-md p-6 flex flex-col gap-3"}>
      <div className={"flex gap-3"}>
        <img src={imageProduct} className={"w-20"} alt={"image-product"} />
        <div>
          <h1 className={"text-lg font-semibold"}>{name}</h1>
          <p className={"text-md font-medium"}>Rp.{price}</p>
          <span>{rate}</span>
        </div>
      </div>
      {children}
    </div>
  );
};
ProductList.propTypes = {
  name: PropTypes.string,
  price: PropTypes.int,
  rate: PropTypes.int,
  children: PropTypes.node,
};

const Product = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);

  const addCartProduct = (param) => {
    return setCartProducts((product) => [...product, param]);
  };

  const showCart = () => {
    return setIsShowCart(!isShowCart);
  };

  const products = {
    makanan: [
      {
        nama: "Nasi Goreng",
        price: 15000,
        rate: 5,
      },
      {
        nama: "Mie Goreng",
        price: 12000,
        rate: 4,
      },
      {
        nama: "Seblak",
        price: 7000,
        rate: 3,
      },
      {
        nama: "Mie Kuah",
        price: 12000,
        rate: 4,
      },
      {
        nama: "Ayam Bakar",
        price: 10000,
        rate: 4,
      },
      {
        nama: "Sate Ayam",
        price: 20000,
        rate: 4,
      },
      {
        nama: "Rica Ayam",
        price: 20000,
        rate: 4,
      },
      {
        nama: "Rica Bebek",
        price: 20000,
        rate: 4,
      },
    ],
    minuman: [
      {
        nama: "Apple Tea",
        price: 4000,
        rate: 3,
      },
      {
        nama: "Lemon Tea",
        price: 4000,
        rate: 3,
      },
      {
        nama: "White Coffe",
        price: 4000,
        rate: 3,
      },
      {
        nama: "Apple Tea",
        price: 4000,
        rate: 3,
      },
      {
        nama: "Coffe Caramel",
        price: 7000,
        rate: 5,
      },
      {
        nama: "Taro Green Tea",
        price: 5000,
        rate: 4,
      },
      {
        nama: "Mangga Tea",
        price: 5000,
        rate: 3,
      },
      {
        nama: "Oreo Red Velvet",
        price: 6000,
        rate: 3,
      },
    ],
    snack: [
      {
        nama: "Udang BBQ",
        price: "8000",
        rate: 5,
      },
      {
        nama: "Udang Keju",
        price: "8000",
        rate: 4,
      },
      {
        nama: "Rambut Nenek",
        price: "8000",
        rate: 3,
      },
      {
        nama: "Kentang Goreng",
        price: "8000",
        rate: 4,
      },
      {
        nama: "Ayam Chicken",
        price: "8000",
        rate: 3,
      },
      {
        nama: "Siomay Bakar",
        price: "8000",
        rate: 3,
      },
      {
        nama: "Sate Usus",
        price: "8000",
        rate: 3,
      },
      {
        nama: "Bakpao",
        price: "8000",
        rate: 3,
      },
    ],
  };

  return (
    <Fragment>
      <Navbar
        isShopping={true}
        isCartNull={cartProducts.length > 0 ? true : false}
        showCart={showCart}
      />
      <div
        className={
          "container px-8 py-20 mx-auto min-h-screen grid grid-cols-1 gap-8"
        }
        id={"top"}
      >
        <div className={"col-span-1 grid grid-cols-4 gap-28"}>
          <CardProduct title={"Makanan"}>
            {products["makanan"].map((product, index) => {
              return (
                <ProductList
                  name={product.nama}
                  price={product.price}
                  rate={product.rate}
                  key={index}
                >
                  <button
                    className={
                      "rounded-md py-2 shadow-md bg-orange-500 hover:bg-orange-400 text-white text-md font-medium"
                    }
                    onClick={() => addCartProduct(products["makanan"][index])}
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
                </ProductList>
              );
            })}
          </CardProduct>
          <CardProduct title={"Minuman"}>
            {products["minuman"].map((product, index) => {
              return (
                <ProductList
                  name={product.nama}
                  price={product.price}
                  rate={product.rate}
                  key={index}
                >
                  <button
                    className={
                      "rounded-md py-2 shadow-md bg-orange-500 hover:bg-orange-400 text-white text-md font-medium"
                    }
                    onClick={() => addCartProduct(products["minuman"][index])}
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
                </ProductList>
              );
            })}
          </CardProduct>
          <CardProduct title={"Snack"}>
            {products["snack"].map((product, index) => {
              return (
                <ProductList
                  name={product.nama}
                  price={product.price}
                  rate={product.rate}
                  key={index}
                >
                  <button
                    className={
                      "rounded-md py-2 shadow-md bg-orange-500 hover:bg-orange-400 text-white text-md font-medium"
                    }
                    onClick={() => addCartProduct(products["snack"][index])}
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
                </ProductList>
              );
            })}
          </CardProduct>
        </div>
      </div>
      <Footer />
      <div
        className={
          (isShowCart ? "scale-1" : "scale-0") +
          " fixed bg-white inset-x-0 inset-y-0 z-50 border-2 border-slate-300 transition-all duration-500 ease-in-out "
        }
      >
        <div
          className={
            (cartProducts.length > 6 ? "grid-rows-none " : "grid-rows-6") +
            "h-[43rem] md:h-[60rem] lg:h-[35rem] my-20 px-12 gap-8 overflow-y-scroll grid grid-cols-1"
          }
        >
          {cartProducts.map((product, index) => {
            return (
              <div
                key={index}
                className={
                  "col-span-1 row-span-1 lg:row-span-2 w-full py-2 flex justify-between items-center px-4 lg:border-4 lg:rounded-xl"
                }
              >
                <div className={"flex gap-2"}>
                  <img
                    src={imageProduct}
                    alt={"image-product"}
                    className={"w-20 h-20 p-2 rounded-md"}
                  />
                  <div className={"flex flex-col"}>
                    <h1>{product.nama}</h1>
                    <p>Rp.{product.price}</p>
                    <span>{product.rate}</span>
                  </div>
                </div>
                <button
                  className={" bg-red-500 text-white text-2xl p-4 rounded-xl"}
                >
                  <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
              </div>
            );
          })}
          <span
            className={
              "fixed top-4 right-4 w-8 h-8 bg-white rounded-full border-slate-300 border-2 flex justify-center items-center text-lg"
            }
            onClick={showCart}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </span>
          <button className={"fixed bottom-10 inset-x-12 py-4 rounded-xl bg-teal-400 text-2xl text-white font-medium"}>Buy Now</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;
