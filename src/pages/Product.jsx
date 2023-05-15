import { Fragment, useState } from "react";
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
        <img src="../../public/hero-image.jpg" className={"w-20"} />
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
    console.log(isShowCart);
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
    </Fragment>
  );
};

export default Product;
