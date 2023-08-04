import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import TextRegulerBold from "../../components/fonts/TextRegulerBold";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
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

        <Image
          source={require("../../../assets/images/home.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.body}>
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
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    height: "25%",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "row",
  },
  body: {
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 300,
    marginLeft: -50,
    zIndex: 2,
  },
  hero: {
    flex: 1,
    marginRight: -50,
    zIndex: 1,
  },
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
