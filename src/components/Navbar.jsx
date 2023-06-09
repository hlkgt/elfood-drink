import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faList,
  faBurger,
  faXmark,
  faArrowUp,
  faArrowDown,
  faLink,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Navlink = (props) => {
  const { text, translate, mode, active, children } = props;
  return (
    <Link
      {...props}
      className={
        (mode === "desktop"
          ? "py-1 px-4 rounded-full border-4 text-white bg-teal-400 font-medium hover:bg-white hover:text-teal-400 hover:border-teal-400 capitalize"
          : "absolute w-16 h-16 rounded-full bg-teal-400 flex justify-center items-center pointer transition-transform ease-in-out duration-500 text-3xl text-white ") +
        translate +
        (active ? " rotate-360" : " rotate-0")
      }
    >
      {text}
      {children}
    </Link>
  );
};
Navlink.propTypes = {
  text: PropTypes.node,
  translate: PropTypes.string,
  mode: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.element,
};

const Navbar = ({ isShopping = false, isCartNull = false, showCart }) => {
  const [isActive, setIsActive] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const handleClick = (param) => {
    const section = document.getElementById(param);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 800) {
        return setIsScroll(true);
      } else {
        return setIsScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <div
        className={
          "w-full h-16 bg-teal-400 fixed z-50 border-b-2 border-teal-100"
        }
      >
        <div className={"container h-full mx-auto px-8"}>
          <div className={"h-full flex justify-between items-center"}>
            <a href={"#"} className={"text-2xl text-white font-semibold"}>
              elfooDrink
            </a>
            <div className={"hidden lg:flex gap-3"}>
              <Navlink to={"/"} text={"home"} mode={"desktop"} />
              <Navlink to={"/about"} text={"about"} mode={"desktop"} />
              <Navlink to={"/product"} text={"product"} mode={"desktop"} />
              <Navlink to={"/testimoni"} text={"testimoni"} mode={"desktop"} />
              {isShopping && (
                <Navlink
                  text={
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                  }
                  translate={"right-8 top-6 text-md w-4 h-4"}
                  active={isActive}
                  onClick={showCart}
                >
                  <span
                    className={
                      (isCartNull ? "block" : "hidden") +
                      " w-2 h-2 bg-red-500 absolute -top-2 -right-3 rounded-full animate-pulse"
                    }
                  ></span>
                </Navlink>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "lg:hidden fixed bottom-10 right-4 w-16 h-16 rounded-full bg-teal-400 flex justify-center items-center pointer"
        }
      >
        <Navlink
          to={"/"}
          text={<FontAwesomeIcon icon={faHome}></FontAwesomeIcon>}
          translate={isActive && "-translate-y-20"}
          active={isActive}
        />
        <Navlink
          to={"/about"}
          text={<FontAwesomeIcon icon={faLink}></FontAwesomeIcon>}
          translate={isActive && "-translate-y-40"}
          active={isActive}
        />
        <Navlink
          to={"/product"}
          text={<FontAwesomeIcon icon={faBurger}></FontAwesomeIcon>}
          translate={isActive && "-translate-y-60"}
          active={isActive}
        />
        <Navlink
          to={"/testimoni"}
          text={<FontAwesomeIcon icon={faList}></FontAwesomeIcon>}
          translate={isActive && "-translate-y-80"}
          active={isActive}
        />
        {isShopping && (
          <Navlink
            text={<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>}
            translate={isActive ? "-translate-y-[25rem] " : "-translate-y-20 "}
            active={isActive}
            onClick={showCart}
          >
            <span
              className={
                (isCartNull ? "block" : "hidden") +
                " w-4 h-4 bg-red-500 absolute top-0 right-0 rounded-full animate-pulse"
              }
            ></span>
          </Navlink>
        )}
        <Navlink
          text={
            <FontAwesomeIcon
              icon={isScroll ? faArrowUp : faArrowDown}
            ></FontAwesomeIcon>
          }
          translate={isActive ? "-translate-x-20" : ""}
          active={isActive}
          onClick={
            isScroll
              ? () => {
                  handleClick("top");
                }
              : () => {
                  handleClick("bottom");
                }
          }
        />
        <Navlink
          text={
            <FontAwesomeIcon
              icon={isActive ? faXmark : faBars}
            ></FontAwesomeIcon>
          }
          onClick={() => setIsActive(!isActive)}
          active={isActive}
        />
      </div>
    </Fragment>
  );
};
Navbar.propTypes = {
  isShopping: PropTypes.bool,
  isCartNull: PropTypes.bool,
  showCart: PropTypes.func,
};

export default Navbar;
