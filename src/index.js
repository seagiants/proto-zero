import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import appState from "./reducers";
import thunk from "redux-thunk";

/*const middleware = applyMiddleware(thunk);
const reduxTools =   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const middlewareAndReduxTools = compose(middleware,reduxTools);
*/
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);

let store = createStore(
  appState,
  enhancer
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
