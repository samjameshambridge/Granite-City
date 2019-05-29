import { compose, createStore } from "redux";
import reducers from "reducers";

import { loadState, saveState } from "helpers/localStorage";
import throttle from "lodash.throttle";

const store = createStore(
  reducers,
  loadState(),
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
