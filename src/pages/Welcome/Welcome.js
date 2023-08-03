import React, { useState } from "react";
import { View } from "react-native";
import LoginButton from "../../components/buttons/loginButton/LoginButton";

import styles from "./styles";
import TextH1ChillaxBold from "../../components/fonts/TextH1ChillaxBold";
import Carousel from "../../components/carousel/Carousel";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Carousel />
      <LoginButton />
    </View>
  );
};

export default Welcome;
