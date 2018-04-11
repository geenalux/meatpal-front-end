import React from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { StackNavigator } from "react-navigation";

export default class Meals extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Text>Meals List Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
