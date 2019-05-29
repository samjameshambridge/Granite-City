import {
  ADD_CART,
  CART_TOTAL,
  CLEAR_CART,
  DEC_CART,
  DELETE_CART,
  INC_CART
} from "actions/types";

export const addToCart = product => {
  return {
    type: ADD_CART,
    payload: product
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const decrementItem = product => {
  return {
    type: DEC_CART,
    payload: product
  };
};

export const deleteFromCart = product => {
  return {
    type: DELETE_CART,
    payload: product
  };
};

export const incrementItem = product => {
  return {
    type: INC_CART,
    payload: product
  };
};

export const sumCartTotal = inCart => {
  return {
    type: CART_TOTAL,
    payload: inCart
  };
};
