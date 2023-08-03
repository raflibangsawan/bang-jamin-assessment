import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Pin = ({ navigation, route }) => {
  return (
    <View>
      <Text>{route.params.text}</Text>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({});
