import { StyleSheet, Image, View } from "react-native";
import React from "react";
import TextRegulerBold from "../fonts/TextRegulerBold";
import colors from "../../constants/colors";

const InfoCard = () => {
  return (
    <View style={[styles.infoCard, styles.shadowProp]}>
      <View style={styles.infoCardElement}>
        <Image
          source={require("../../../assets/icons/wallet.png")}
          style={styles.infoImageIcon}
        />
        <TextRegulerBold color={"#3F3F3F"}>IDR 0 Jt</TextRegulerBold>
      </View>
      <View
        style={{
          height: "100%",
          borderColor: colors.gray,
          borderWidth: 0.4,
        }}
      />
      <View style={styles.infoCardElement}>
        <Image
          source={require("../../../assets/icons/coin.png")}
          style={styles.infoImageIcon}
        />
        <TextRegulerBold color={"#3F3F3F"}>0 Poin</TextRegulerBold>
      </View>
      <View
        style={{
          height: "100%",
          borderColor: colors.gray,
          borderWidth: 0.4,
        }}
      />
      <View style={styles.infoCardElement}>
        <Image
          source={require("../../../assets/icons/people-transparent.png")}
          style={styles.infoImageIcon}
        />
        <TextRegulerBold color={"#3F3F3F"}>0 Sahabat</TextRegulerBold>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    gap: 16,
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.white,
    height: 100,
    borderRadius: 20,
    marginTop: -50,
    padding: 18,
  },
  shadowProp: {
    shadowColor: "#52006A",
    elevation: 5,
  },
  infoImageIcon: {
    resizeMode: "contain",
    width: 30,
  },
  infoCardElement: { flex: 1, justifyContent: "space-around" },
});
