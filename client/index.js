/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import userReducer from "./store/reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

const Root = function () {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
