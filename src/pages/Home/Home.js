import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../../constants/colors";
import InfoCard from "../../components/infoCard/InfoCard";

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
        <InfoCard />
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
});
