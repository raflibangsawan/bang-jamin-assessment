import { StyleSheet, Image, View, TextInput } from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";
import TextH2SemiBold from "../../components/fonts/TextH2SemiBold";
import ContinueButton from "../../components/buttons/continueButton/ContinueButton";
import TextSmall from "../../components/fonts/TextSmall";

const Login = ({ navigation }) => {
  const [text, onChangeText] = useState("");
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
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="tony@bangjamin.com"
        />
        <ContinueButton navigation={navigation} />
        <TextSmall size={10} color={"#545454"}>
          By clicking continue, you agree to our{" "}
          <TextSmall size={10} color={colors.primary}>
            Terms of Use
          </TextSmall>{" "}
          and acknowledge that you have read our{" "}
          <TextSmall size={10} color={colors.primary}>
            Privacy Policy
          </TextSmall>
          .
        </TextSmall>
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
    gap: 10,
    width: "100%",
    justifyContent: "flex-start",
    padding: 20,
  },
  logoImage: {
    resizeMode: "contain",
    width: 120,
  },
  input: {
    borderColor: "#E3E3E3",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    paddingHorizontal: 16,
  },
});
