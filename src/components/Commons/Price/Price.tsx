import { twoDecimalNumber } from "../../../utils";

import "./Price.scss";

interface IProps {
  price: number;
}

export const Price = ({ price }: IProps) => {
  return (
    <div className="price">
      {twoDecimalNumber(price)}
      <span className="price__exchange"> EUR</span>
    </div>
  );
};
