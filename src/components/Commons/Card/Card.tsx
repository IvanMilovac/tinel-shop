import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import { Button, Date, Price } from "../";

import { useStoreDispatch, useStoreSelector } from "../../../hooks";

import { WorkshopContext } from "../../App/App";

import "./Card.scss";

interface IProps {
  ws: IWorkshopsWithQtyCat;
}

export const Card = ({ ws }: IProps) => {
  const { imageUrl, date, title, price, CategoryImage, id } = ws;

  const { addToCart } = useStoreDispatch();

  const {
    workshops: { cart },
  } = useStoreSelector();

  const { toggleCart } = useContext(WorkshopContext);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(ws);
    toggleCart();
  };

  const handleMoreDetails = (id: number) => navigate(`/${id}`);

  return (
    <div className="card">
      <div className="card__images">
        <img
          className="card__image-workshop"
          src={imageUrl}
          alt=""
          onClick={() => handleMoreDetails(id)}
        />
        {CategoryImage && <CategoryImage className="card__image-category" />}
      </div>
      <div className="card__content">
        <Date date={date} />
        <h4
          className="card__content-title"
          onClick={() => handleMoreDetails(id)}
        >
          {title}
        </h4>
        <div className="card__content-price-button">
          <Price price={price} />
          <Button
            color="primary card__cta"
            onClick={handleAddToCart}
            disabled={cart.find((item) => item.id === ws.id)}
          >
            <p className="card__cta-desktop">Add to cart</p>
            <FiShoppingCart className="card__cta-mobile" />
          </Button>
        </div>
      </div>
    </div>
  );
};
