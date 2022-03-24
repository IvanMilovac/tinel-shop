import classnames from "classnames";
import { IconType } from "react-icons";

import { useStoreDispatch, useStoreSelector } from "../../../hooks";

import { FallbackImg } from "../../Commons";

type FilterItemType = {
  name: string;
  Img: IconType | null;
};

interface IProps {
  item: FilterItemType;
}

export const WorkshopFilterItem = ({ item }: IProps) => {
  const { name, Img } = item;

  const {
    workshops: { filter },
  } = useStoreSelector();

  const { setFilter } = useStoreDispatch();

  const handleSetFilter = () => setFilter(name.toLowerCase());

  return (
    <li
      className={classnames(
        "filter__list-item",
        filter === name.toLowerCase() && "active"
      )}
      onClick={handleSetFilter}
    >
      {Img ? <Img /> : <FallbackImg />}
      <p>{name}</p>
    </li>
  );
};
