import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackNavigator } from "react-navigation";

import { Provider } from "react-redux";
import store from "./client/store";

import Home from "./client/components/Home";
import Meals from "./client/components/Meals";
import SingleMeal from "./client/components/SingleMeal";

const RootNavigator = StackNavigator({
  Main: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  MealsList: {
    screen: Meals,
    navigationOptions: {
      headerTitle: "Meals"
    }
  },
  Meal: {
    screen: SingleMeal,
    navigationOptions: {
      headerTitle: "SingleMeal"
  }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
