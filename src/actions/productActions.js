import { DETAIL_PRODUCT, SET_PRODUCTS } from "actions/types";

export const setProducts = currList => {
  return {
    type: SET_PRODUCTS,
    payload: {
      currList
    }
  };
};

export const detailProduct = product => {
  return {
    type: DETAIL_PRODUCT,
    payload: product
  };
};
