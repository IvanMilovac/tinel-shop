import { combineReducers } from "redux";
import workshopsReducer from "./workshopsReducer";

export const reducers = combineReducers({
  workshops: workshopsReducer,
});

export type RootState = ReturnType<typeof reducers>;
