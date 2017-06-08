import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import appState from "./reducers";

let store = createStore(
  appState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

fetch("http://localhost:9000/newgame")
  .then(response => {
    console.log("Response from the server");
    return response.json();
  })
  .then(data => {
    console.log("Game data is", data);
  })
  .catch(error => {
    console.error("Error when trying to reach the server", error);
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
