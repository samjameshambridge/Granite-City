import {
  ADD_CART,
  CART_TOTAL,
  CLEAR_CART,
  DELETE_CART,
  INC_CART,
  DEC_CART
} from "actions/types";

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_CART:
      // if it is an existing product
      if (
        state.inCart.filter(product => product.id === action.payload.id).length
      ) {
        return {
          ...state,
          inCart: state.inCart.map(product =>
            product.id === action.payload.id ? action.payload : product
          )
        };
      } else {
        return {
          ...state,
          inCart: [action.payload, ...state.inCart]
        };
      }
    case CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload.reduce((acc, product) => {
          acc = parseFloat(acc) + parseFloat(product.total);
          return acc.toFixed(2);
        }, 0)
      };

    case CLEAR_CART:
      return {
        ...state,
        inCart: []
      };

    case DEC_CART:
      // if this is a new product, then just add it straight on
      if (action.payload.quantity < 1) {
        return {
          ...state,
          inCart: state.inCart.filter(
            product => product.title !== action.payload.title
          )
        };
      }
      // else if there is already a product of that type, swap the old product out for the new product
      else {
        return {
          ...state,
          inCart: state.inCart.map(product => {
            if (product.id !== action.payload.id) return product;
            else {
              return action.payload;
            }
          })
        };
      }

    case DELETE_CART:
      return {
        ...state,
        inCart: state.inCart.filter(product => product.id !== action.payload.id)
      };

    case INC_CART:
      return {
        ...state,
        inCart: state.inCart.map(product => {
          if (product.id !== action.payload.id) return product;
          else {
            return action.payload;
          }
        })
      };

    default:
      return {
        ...state
      };
  }
}

export default cartReducer;
