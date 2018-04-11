import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { StackNavigator } from "react-navigation";

import Home from "./client/components/Home";
import Meals from "./client/components/Meals";

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
  }
});

export default class App extends React.Component {
  render() {
    return <RootNavigator />;
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
