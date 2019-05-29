import { OPEN_MODAL, CLOSE_MODAL } from "actions/types";

function modalReducer(state, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    default:
      return {
        ...state,
        modalOpen: false
      };
  }
}

export default modalReducer;
