import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import TextRegulerBold from "../../fonts/TextRegulerBold";
import colors from "../../../constants/colors";

const LoginButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Login")}
    >
      <TextRegulerBold color={colors.primary}>LOG IN</TextRegulerBold>
    </TouchableOpacity>
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
