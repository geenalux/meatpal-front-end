import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  FlatList
} from "react-native";
import { StackNavigator } from "react-navigation";
import { connect } from "react-redux";

import { fetchMeals } from "../reducers";

class SingleMeal extends React.Component {
  componentDidMount() {
    this.props.fetchMealsFromServer();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.meals}
          renderItem={({ item }) => {
            return (
              <View id={item.id}>
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
    fetchMealsFromServer: function() {
      return dispatch(fetchMeals());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
