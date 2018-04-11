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

import { fetchMeal } from "../reducers";

import MapView from "react-native-maps";

class SingleMeal extends React.Component {
  componentDidMount() {
    this.props.fetchMealFromServer(this.props.selectedMeal);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text style={{ fontSize: 48, fontWeight: "bold" }}>
            {this.props.selectedMeal.name}
          </Text>
          <Image
            source={{ uri: this.props.selectedMeal.imageUrl }}
            style={{ height: 200, width: 500 }}
          />
          <Text style={{ fontSize: 32 }}>
            {this.props.selectedMeal.restaurant}
          </Text>
          <Text style={{ fontSize: 32 }}>
            {this.props.selectedMeal.location}
          </Text>
        </View>
        <MapView
          style={{ bottom: 0, position: 'absolute' }}
          initialRegion={{
            latitude: -74.009,
            longitude: 40.705,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  container: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = function(state) {
  return {
    selectedMeal: state.meals[0]
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    fetchMealFromServer: function(meal) {
      return dispatch(fetchMeal(meal));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleMeal);
