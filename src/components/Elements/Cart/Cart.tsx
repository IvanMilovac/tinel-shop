import { useContext } from "react";
import { TiTimes } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import classnames from "classnames";

import { CartCard } from "../";

import { Button } from "../../Commons";

import { WorkshopContext } from "../../App/App";

import { twoDecimalNumber } from "../../../utils";

import { useStoreSelector } from "../../../hooks";

import "./Cart.scss";

export const Cart = () => {
  const {
    workshops: { cart, total },
  } = useStoreSelector();

  const { setCheckout, toggleCart, openCart } = useContext(WorkshopContext);

  const handleCheckout = () => {
    toggleCart();
    setCheckout(true);
  };

  return (
    <div className={classnames("cart", openCart && "show")}>
      <div className="cart__header">
        <div className="cart__header-nb">
          <FiShoppingCart className="cart__header-icon" />
          <p>{cart.length} Workshops</p>
        </div>
        <TiTimes className="cart__close" onClick={toggleCart} />
      </div>
      {cart.length ? (
        <>
          <div className="cart__body">
            {cart?.map((item: IWorkshopsWithQtyCat) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
          <div className="cart__total">
            <p className="cart__total-title">Subtotal</p>
            <p className="cart__total-value">
              {twoDecimalNumber(total)}
              <span className="cart__total-exchange"> EUR</span>
            </p>
          </div>
          <Button
            color="secondary"
            additionalClass="cart__checkout"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </>
      ) : (
        <p className="cart__body-empty">Cart is Empty</p>
      )}
    </div>
  );
};
