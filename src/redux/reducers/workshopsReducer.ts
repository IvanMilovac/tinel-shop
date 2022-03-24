import { ActionType } from "../action-types";
import { Action } from "../actions";

type ItemsQuantityType = {
  id: number;
  quantity: number;
};

const initialState = {
  workshopsList: [] as IWorkshopsWithQtyCat[],
  filter: "all",
  cart: [] as IWorkshopsWithQtyCat[],
  total: 0,
  itemsQuantity: [] as ItemsQuantityType[],
};

type workshopsStateType = {
  workshopsList: IWorkshopsWithQtyCat[];
  filter: string;
  cart: IWorkshopsWithQtyCat[];
  total: number;
  itemsQuantity: ItemsQuantityType[];
};

const calculateTotal = (cart: IWorkshopsWithQtyCat[]): number => {
  let sum = 0;
  for (let ws of cart) {
    if (ws.quantity) sum += ws.price * ws.quantity;
  }

  return sum;
};

const updateItemQty = (
  item: IWorkshopsWithQtyCat,
  qtyToUpdate: number = 1
): IWorkshopsWithQtyCat => {
  return { ...item, quantity: qtyToUpdate };
};

const addToCart = (
  workshop: IWorkshopsWithQtyCat,
  state: workshopsStateType
): workshopsStateType => {
  const { cart } = state;

  const alreadyInCart = cart.find((item) => item.title === workshop.title);

  if (alreadyInCart) return state;

  const newCart: IWorkshopsWithQtyCat[] = cart.concat(workshop);

  return {
    ...state,
    cart: newCart,
    total: calculateTotal(newCart),
  };
};

const deleteFromCart = (
  workshopId: number,
  state: workshopsStateType
): workshopsStateType => {
  const { cart, itemsQuantity } = state;

  const newCart = cart.filter(({ id }) => id !== workshopId);

  const newItemsQuantity = itemsQuantity.filter(
    (item) => item.id !== workshopId
  );

  return {
    ...state,
    cart: newCart,
    itemsQuantity: newItemsQuantity,
    total: calculateTotal(newCart),
  };
};

const changeItemQty = (
  workshop: IWorkshopsWithQtyCat,
  state: workshopsStateType,
  qty: number
) => {
  const { workshopsList, cart, itemsQuantity } = state;

  const itemWithUpdatedQty = updateItemQty(workshop, qty);

  const newShoppingList = workshopsList.map((item) => {
    if (item.id !== workshop.id) return item;
    return itemWithUpdatedQty;
  });

  const newCart = cart.map((item) => {
    if (item.id !== workshop.id) return item;
    return itemWithUpdatedQty;
  });

  const isExist = itemsQuantity.find((i) => i.id === workshop.id);

  let newCartQuantity;

  if (isExist)
    newCartQuantity = itemsQuantity.map((item) => {
      if (item.id !== workshop.id) return item;
      return { id: workshop.id, quantity: qty };
    });
  else
    newCartQuantity = itemsQuantity.concat({ id: workshop.id, quantity: qty });

  return {
    ...state,
    workshopsList: newShoppingList,
    cart: newCart,
    itemsQuantity: newCartQuantity,
    total: calculateTotal(newCart),
  };
};

const workshopsReducer = (
  state: workshopsStateType = initialState,
  action: Action
): workshopsStateType => {
  switch (action.type) {
    case ActionType.SAVE_WORKSHOPS:
      return { ...state, workshopsList: action.payload };
    case ActionType.SET_FILTER:
      return { ...state, filter: action.payload };
    case ActionType.ADD_TO_CART:
      return addToCart(action.payload, state);

    case ActionType.DELETE_FROM_CART:
      return deleteFromCart(action.payload, state);

    case ActionType.CHANGE_QUANTITY:
      return changeItemQty(action.payload.workshop, state, action.payload.qty);
    case ActionType.RESET_STATE:
      return initialState;
    default:
      return state;
  }
};

export default workshopsReducer;
