import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  compose(
    // process.env.NODE_ENV === "production"
    //   ? applyMiddleware(...middleware)
    //   :

    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
