import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";

import { fetchMeals, fetchMeal } from "../reducers";

class Meals extends React.Component {
  componentDidMount() {
    this.props.fetchMealsFromServer();
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(meal) {
    this.props.fetchMealFromServer(meal);
    return this.props.navigation.navigate("Meal");
  }

  render() {
    // const { navigation } = StackNavigator;
    // console.log("NAVIGATION", navigation);
    return (
      <View>
        <FlatList
          data={this.props.meals}
          renderItem={({ item }) => {
            return (
              <View>
                <TouchableHighlight
                  onPress={() => this.handlePress(item)}
                  id={item.id}
                >
                  <View>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={{ height: 200, width: 500 }}
                    />
                    <Text>{item.restaurant}</Text>
                    <Text>{item.location}</Text>
                  </View>
                </TouchableHighlight>
              </View>
            );
          }}
        />
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

const mapStateToProps = function(state) {
  return {
    meals: state.meals
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMealFromServer: function(meal) {
      return dispatch(fetchMeal(meal));
    },
    fetchMealsFromServer: function() {
      return dispatch(fetchMeals());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
