import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../constants/colors";

const HeroText = () => {
  return (
    <View style={styles.hero}>
      <Text
        style={{
          fontFamily: "mul-semibold",
          fontSize: 18,
          color: colors.white,
          textAlign: "left",
        }}
      >
        Halo Sahabat
      </Text>
      <Text
        style={{
          fontFamily: "chi-bold",
          fontSize: 24,
          color: colors.white,
          textAlign: "left",
        }}
      >
        Bang Jamin,
      </Text>
      <Text
        style={{
          fontFamily: "mul-semibold",
          fontSize: 18,
          color: colors.white,
          textAlign: "left",
        }}
      >
        Cari Cuan Yuk
      </Text>
    </View>
  );
};

export default HeroText;

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    marginRight: -50,
    zIndex: 1,
  },
});
