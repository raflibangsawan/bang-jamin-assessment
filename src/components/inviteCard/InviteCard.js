import { StyleSheet, Image, View } from "react-native";
import React from "react";
import TextRegulerBold from "../fonts/TextRegulerBold";
import colors from "../../constants/colors";
import TextRegulerSemiBold from "../fonts/TextRegulerSemiBold";

const InviteCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/icons/shakehand.png")}
        style={styles.infoImageIcon}
      />
      <View style={styles.inviteMessage}>
        <TextRegulerBold color={colors.black}>
          Yuk Undang Sahabat!
        </TextRegulerBold>
        <TextRegulerSemiBold color={"#878787"} opacity={0.8}>
          Cari cuan bareng sahabat kamu
        </TextRegulerSemiBold>
      </View>
      <Image
        source={require("../../../assets/icons/addbutton.png")}
        style={styles.infoImageIcon}
      />
    </View>
  );
};

export default InviteCard;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#f5f5f5",
    height: 100,
    borderRadius: 20,
    padding: 18,
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoImageIcon: {
    resizeMode: "contain",
    width: 35,
  },
  infoCardElement: { flex: 1, justifyContent: "space-around" },
  inviteMessage: {
    flex: 1,
    width: "100%",
    gap: 5,
  },
});
