import { useContext } from "react";

import { Button, Price, SelectQuantity } from "../../Commons";

import { useStoreDispatch, useStoreSelector } from "../../../hooks";

import { twoDecimalNumber } from "../../../utils";
import { WorkshopContext } from "../../App/App";

import "./WorkshopCTACard.scss";

interface IProps {
  workshop: IWorkshopsWithQtyCat;
}

export const WorkshopCTACard = ({ workshop }: IProps) => {
  const { toggleCart } = useContext(WorkshopContext);
  const { addToCart } = useStoreDispatch();
  const {
    workshops: { cart, itemsQuantity },
  } = useStoreSelector();

  const handleAddToCart = () => {
    addToCart(workshop);
    toggleCart();
  };

  return (
    <div className="cta__card">
      <p className="cta__card-title">Buy your ticket</p>
      <div className="cta__card-price-add">
        <Price price={workshop?.price} />
        <div className="cta__card-add">
          <SelectQuantity
            workshop={workshop}
            menuPlacement="top"
            additionalClass="cta__card-qty"
          />
          <Button
            color="primary cta__card-button"
            onClick={handleAddToCart}
            disabled={cart.find((item) => item?.id === workshop?.id)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="cta__card-subtotal">
        Subtotal:{" "}
        {twoDecimalNumber(
          workshop?.price *
            (itemsQuantity?.find((i) => i.id === workshop.id)?.quantity || 1)
        )}{" "}
        EUR
      </div>
    </div>
  );
};
