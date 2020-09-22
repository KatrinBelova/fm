import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/index";
import { CssBaseline } from "@material-ui/core";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <App />
        </>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
