import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TextRegulerBold from "../../fonts/TextRegulerBold";
import colors from "../../../constants/colors";

const LoginButton = () => {
  return (
    <View style={styles.container}>
      <TextRegulerBold color={colors.primary}>LOG IN</TextRegulerBold>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
