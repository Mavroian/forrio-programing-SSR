//startup point for the side clint application
import "babel-polyfill"
import React from "react";
import ReactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Routes from "./Routes"
import reducers from "./Reducers"

// create store to use on the client side
let initialState = {}
const store = createStore(reducers, initialState, applyMiddleware(thunk));


ReactDom.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>

  ,
  document.getElementById("root")
);