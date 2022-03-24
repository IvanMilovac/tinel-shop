import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";

export const useStoreSelector = () => {
  return useSelector((state: RootState) => state);
};
