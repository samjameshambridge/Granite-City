import { combineReducers } from "redux";
import modalReducer from "reducers/modalReducer";
import productsReducer from "reducers/productsReducer";
import cartReducer from "reducers/cartReducer";

export default combineReducers({
  cart: cartReducer,
  modal: modalReducer,
  products: productsReducer
});
