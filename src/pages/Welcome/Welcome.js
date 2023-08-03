import React, { useState } from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "react-native";

import styles from "./styles";
import TextH1ChillaxBold from "../../components/fonts/TextH1ChillaxBold";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextH1ChillaxBold color={"white"}>BangJamin</TextH1ChillaxBold>
    </View>
  );
};

export default Welcome;
