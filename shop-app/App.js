import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer for a long period of time, i.e."]);

import productsReducer from "./store/reducers/productsReducer";
import cartReducer from "./store/reducers/cartReducer";
import ordersReducer from "./store/reducers/ordersReducer";
import authReducer from "./store/reducers/authReducer";
import NavigationContainer from "./navigation/NavigationContainer";
import { SafeAreaView } from "react-native-safe-area-context";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer />
      </SafeAreaView>
    </Provider>
  );
}
