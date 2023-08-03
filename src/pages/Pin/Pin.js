import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import TextH2SemiBold from "../../components/fonts/TextH2SemiBold";
import TextReguler from "../../components/fonts/TextReguler";

const Pin = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo-bg-white-fit.png")}
        style={styles.logoImage}
      />
      <TextH2SemiBold>Enter Bang Jamin PIN</TextH2SemiBold>
      <TextReguler color={colors.darkGray}>{route.params.text}</TextReguler>
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  logoImage: {
    resizeMode: "contain",
    width: 120,
  },
});
