import { DETAIL_PRODUCT, SET_PRODUCTS } from "actions/types";

export default function(state, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        currList: action.payload.currList
      };

    case DETAIL_PRODUCT:
      return { ...state, detailProduct: action.payload };

    default:
      return {
        ...state
      };
  }
}
