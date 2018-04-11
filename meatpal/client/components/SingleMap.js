import React from "react";
import { View, Text } from "react-native";

import MapView from "react-native-maps";

export default SingleMap = () => {
  return (
      <MapView
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
        initialRegion={{
          latitude: -74.009,
          longitude: 40.705,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      />
  );
};
