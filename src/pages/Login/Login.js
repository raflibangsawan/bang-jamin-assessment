import { StyleSheet, Image, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import TextH2SemiBold from "../../components/fonts/TextH2SemiBold";

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/login-image.png")}
        style={styles.image}
      />
      <View style={styles.form}>
        <Image
          source={require("../../../assets/images/logo-bg-white-fit.png")}
          style={styles.logoImage}
        />
        <TextH2SemiBold>Login via Email</TextH2SemiBold>
      </View>
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
    flex: 0.6,
    justifyContent: "center",
    width: "100%",
  },
  form: {
    flex: 0.4,
    width: "100%",
    justifyContent: "flex-start",
    padding: 20,
  },
  logoImage: {
    resizeMode: "contain",
    width: 130,
  },
});
