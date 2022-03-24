import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

import { useStoreDispatch, useStoreSelector } from "../../../hooks";

import { customQtySelect } from "../../../helper-data";

type SelectType = {
  value: number;
  label: string;
};

const selectOptions: SelectType[] = [
  { value: 1, label: "1" },
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];

interface IProps {
  workshop: IWorkshopsWithQtyCat;
  additionalClass?: string;
  menuPlacement: "top" | "bottom";
}

export const SelectQuantity = ({
  workshop,
  menuPlacement = "bottom",
  additionalClass = "",
}: IProps) => {
  const {
    workshops: { itemsQuantity },
  } = useStoreSelector();

  const [qty, setQty] = useState<SingleValue<SelectType>>(selectOptions[0]);
  const { changeQtuantity } = useStoreDispatch();

  useEffect(() => {
    const iq = itemsQuantity?.find((i) => i.id === workshop.id);
    if (iq)
      return setQty({
        value: iq?.quantity,
        label: String(iq?.quantity),
      });
    return setQty({
      value: 1,
      label: String(1),
    });
  }, [itemsQuantity, workshop]);

  const handleChange = (value: SingleValue<SelectType>) => {
    if (value) {
      setQty(value);
      changeQtuantity(workshop, value.value);
    }
  };

  return (
    <Select
      className={additionalClass}
      options={selectOptions}
      value={qty}
      onChange={handleChange}
      isSearchable={false}
      menuPlacement={menuPlacement}
      styles={customQtySelect}
    />
  );
};
