import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

export const useStoreDispatch = () => {
  return bindActionCreators(actionCreators, useDispatch());
};
