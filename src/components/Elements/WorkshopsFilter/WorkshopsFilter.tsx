import { useState } from "react";
import Select, { SingleValue } from "react-select";

import { WorkshopFilterItem } from "./WorkshopsFilterItem";

import { useStoreDispatch, useStoreSelector } from "../../../hooks";

import {
  filterCategories,
  customSelectStyles,
  selectFilterOptions,
} from "../../../helper-data";

import "./WorkshopsFilter.scss";

type SelectFilterType = {
  value: string;
  label: string;
};

export const WorkshopFilter = () => {
  const {
    workshops: { filter },
  } = useStoreSelector();

  const storedFilter = selectFilterOptions.find(
    (filterItem) => filterItem.value === filter
  );

  const [filterMob, setFilterMob] = useState<SelectFilterType>(
    storedFilter || selectFilterOptions[0]
  );

  const { setFilter } = useStoreDispatch();

  const handleChange = (value: SingleValue<SelectFilterType>) => {
    if (!value) return;
    setFilterMob(value);
    setFilter(value.value);
  };

  return (
    <>
      <Select
        className="filter__mobile"
        options={selectFilterOptions}
        value={filterMob}
        onChange={handleChange}
        isSearchable={false}
        styles={customSelectStyles}
      />
      <aside className="filter">
        <p className="filter__title">Filter by category:</p>
        <ul className="filter__list">
          {filterCategories.map((item) => (
            <WorkshopFilterItem key={item.name} item={item} />
          ))}
        </ul>
      </aside>
    </>
  );
};
