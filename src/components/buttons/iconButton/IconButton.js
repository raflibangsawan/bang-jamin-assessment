import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../../constants/colors";

const IconButton = ({ label, children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Text
        style={{
          fontFamily: "mul-bold",
          fontSize: 12,
          color: "#3F3F3F",
          textAlign: "left",
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
});
