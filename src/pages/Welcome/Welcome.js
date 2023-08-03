import React, { useState } from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "react-native";

import styles from "./styles";
import TextH1Chillax from "../../components/fonts/TextH1Chillax";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TextH1Chillax color={"white"}>BangJamin</TextH1Chillax>
    </View>
  );
};

export default Welcome;
