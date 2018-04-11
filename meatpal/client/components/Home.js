import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { StackNavigator } from "react-navigation";

import { Provider } from "react-redux";
import store from "../store";

export default Home = ({navigation}) => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text style={{ fontSize: 48, color: "red" }}>MEAT</Text><Text style={{fontSize: 48, color: "red", fontWeight: "bold"}}>PAL</Text>
      <Image
        source={{
          uri:
            "https://www.colourbox.com/preview/22633275-funny-beef-steak-character-holding-fork-and-knife.jpg"
        }}
        style={{ width: 400, height: 400 }}
      />
      <View style={styles.mealsButton}>
        <Button onPress={() => navigation.navigate("MealsList")} title="Go to Meats" color="#FFF" />
      </View>
    </View>
  </Provider>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mealsButton: {
    backgroundColor: "#F00",
    borderRadius: 9
  }
});
