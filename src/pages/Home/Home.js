import { View, Image } from "react-native";
import React from "react";
import InfoCard from "../../components/infoCard/InfoCard";
import InviteCard from "../../components/inviteCard/InviteCard";
import HeroText from "../../components/heroText/HeroText";
import ProdukAsuransi from "../../components/sections/produkAsuransi/ProdukAsuransi";
import RuangKerja from "../../components/sections/ruangKerja/RuangKerja";
import styles from "./styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeroText />
        <Image
          source={require("../../../assets/images/home.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.body}>
        <InfoCard />
        <InviteCard />
        <ProdukAsuransi />
        <RuangKerja />
      </View>
    </View>
  );
};

export default Home;
