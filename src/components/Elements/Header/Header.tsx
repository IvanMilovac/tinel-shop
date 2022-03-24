import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import classnames from "classnames";

import { useStoreSelector } from "../../../hooks";

import Logo from "../../../assets/Logo.svg";

import "./Header.scss";

interface IProps {
  toggleCart: () => void;
}

export const Header = ({ toggleCart }: IProps) => {
  const {
    workshops: { cart },
  } = useStoreSelector();

  const navigate = useNavigate();

  const handleHome = () => navigate("/");

  return (
    <header className="header">
      <div className="header__content">
        <img className="header__logo" src={Logo} alt="" onClick={handleHome} />
        <div
          className={classnames("header__cart", !cart.length && "hide")}
          onClick={toggleCart}
        >
          <FiShoppingCart className="header__cart-image" />
          <p className="header__cart-text">
            {!cart.length ? "Cart is empty" : `${cart.length} Workshop in Cart`}
          </p>
        </div>
      </div>
    </header>
  );
};
