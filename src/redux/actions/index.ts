import { ActionType } from "../action-types";

type WorkshopsActions =
  | { type: ActionType.SAVE_WORKSHOPS; payload: IWorkshopsWithQtyCat[] }
  | { type: ActionType.SET_FILTER; payload: string }
  | { type: ActionType.ADD_TO_CART; payload: IWorkshopsWithQtyCat }
  | { type: ActionType.DELETE_FROM_CART; payload: number }
  | {
      type: ActionType.CHANGE_QUANTITY;
      payload: { workshop: IWorkshopsWithQtyCat; qty: number };
    }
  | { type: ActionType.RESET_STATE };

export type Action = WorkshopsActions;
