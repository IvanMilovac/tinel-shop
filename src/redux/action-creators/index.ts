import { Dispatch } from "react";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const saveWorkshops = (workshops: IWorkshopsWithQtyCat[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SAVE_WORKSHOPS, payload: workshops });
  };
};

export const setFilter = (value: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SET_FILTER, payload: value });
  };
};

export const addToCart = (workshop: IWorkshopsWithQtyCat) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.ADD_TO_CART, payload: workshop });
  };
};

export const deleteFromCart = (workshopId: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_FROM_CART,
      payload: workshopId,
    });
  };
};

export const changeQtuantity = (
  workshop: IWorkshopsWithQtyCat,
  qty: number
) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CHANGE_QUANTITY,
      payload: { workshop, qty },
    });
  };
};

export const resetState = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET_STATE,
    });
  };
};
