import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import React from "react";
import store from "./store/store";
import ShopNavigator from "./navigations/ShopNavigator";

export default function App() {
  return (
      <Provider store={store}>
        <ShopNavigator />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
