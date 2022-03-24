import { GrBrush } from "react-icons/gr";
import { RiLayoutLine } from "react-icons/ri";
import { BiCode } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";

export const filterCategories = [
  { name: "All", Img: null },
  { name: "Design", Img: GrBrush },
  { name: "Frontend", Img: RiLayoutLine },
  { name: "Backend", Img: BiCode },
  { name: "Marketing", Img: BsLightningCharge },
];

export const CategoriesImage: { [key: string]: any } = {
  all: null,
  design: GrBrush,
  frontend: RiLayoutLine,
  backend: BiCode,
  marketing: BsLightningCharge,
};

/*////////////////////////////////////////////////////////////
REACT SELECT - OPTIONS
////////////////////////////////////////////////////////////*/

export const selectFilterOptions = [
  { value: "all", label: "All" },
  { value: "design", label: "Design" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "marketing", label: "Marketing" },
];

/*////////////////////////////////////////////////////////////
REACT SELECT - CUSTOM STYLES
////////////////////////////////////////////////////////////*/

export const customSelectStyles = {
  container: (provided: any, state: any) => ({
    ...provided,
    position: "absolute",
    top: "6.5rem",
    left: "1rem",
    width: "40%",
    maxWidth: "200px",
    zIndex: "200",
    fontSize: "1.25rem",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    flexDirection: "row-reverse",
    boxShadow: "none",
    border: "0",
    cursor: "pointer",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    paddingInline: "0",
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    paddingInline: "0",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: "#0097cc",
    fontWeight: "700",
    "&:hover": {
      color: "#0097cc",
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? "white" : "#0097cc",
    fontWeight: "700",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "#0097cc",
    fontWeight: "700",
    outline: "none",
  }),
};

export const customQtySelect = {
  container: (provided: any, state: any) => ({
    ...provided,
    width: "70px",
    fontSize: "1.25rem",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: "1px solid #0097cc",
    cursor: "pointer",
    color: "black",
    fontWeight: "700",
    fontSize: "1rem",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none",
  }),
  indicatorContainer: (provided: any, state: any) => ({
    ...provided,
    fontSize: "0.5rem",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    paddingLeft: "0rem",
    color: "black",
    fontWeight: "700",
    fontSize: "0.5rem",
    "&:hover": {
      color: "black",
    },
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    fontSize: "0.95rem",
  }),
};

export const customGenderSelect = {
  container: (provided: any, state: any) => ({
    ...provided,
    padding: "0",
    margin: "0",
    width: "100%",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
  }),
  indicatorSeparator: (provided: any, state: any) => ({
    ...provided,
    display: "none",
  }),
  indicatorContainer: (provided: any, state: any) => ({
    ...provided,
    fontSize: "0.5rem",
  }),
  valueContainer: (provided: any, state: any) => ({
    ...provided,
    padding: "0.5rem",
    fontSize: "1.125rem",
  }),
  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    paddingLeft: "0rem",
    color: "black",
    fontWeight: "700",
    fontSize: "0.5rem",
    "&:hover": {
      color: "black",
    },
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    fontSize: "1.05rem",
  }),
};
