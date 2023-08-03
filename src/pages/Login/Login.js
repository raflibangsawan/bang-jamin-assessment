import { StyleSheet, Image, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/login-image.png")}
        style={styles.image}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    maxHeight: "65%",
  },
});
