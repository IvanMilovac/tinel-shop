import { RiDeleteBinLine } from "react-icons/ri";

import { SelectQuantity } from "../../Commons";

import { useStoreDispatch } from "../../../hooks";

import { stringSlicer, twoDecimalNumber } from "../../../utils";

import "./CartCard.scss";

interface IProps {
  item: IWorkshopsWithQtyCat;
}

export const CartCard = ({ item }: IProps) => {
  const { id, title, imageUrl, price } = item;
  const { deleteFromCart } = useStoreDispatch();

  const handleDelete = () => {
    deleteFromCart(id);
  };

  return (
    <div className="cart__card-wrapper">
      <div className="cart__card">
        <img className="cart__card-image" src={imageUrl} alt="" />
        <div className="cart__card-content">
          <RiDeleteBinLine
            className="cart__card-delete"
            onClick={handleDelete}
          />
          <p className="cart__card-title">{stringSlicer(title, 35)}</p>
          <div className="cart__card-select">
            <div className="cart__card-price">
              <p className="cart__card-price-value">
                {twoDecimalNumber(price)}
                <span className="cart__card-price-exchange"> EUR</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <SelectQuantity
        workshop={item}
        menuPlacement="bottom"
        additionalClass="cart__card-qty"
      />
    </div>
  );
};
