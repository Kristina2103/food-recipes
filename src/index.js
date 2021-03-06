import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import { reducer as formReducer } from "redux-form";

import authReducer from "./store/reducers/auth";
import searchReducer from "./store/reducers/search";
import mainReducer from "./store/reducers/main";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  auth: authReducer,
  main: mainReducer,
  search: searchReducer,
  form: formReducer
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
