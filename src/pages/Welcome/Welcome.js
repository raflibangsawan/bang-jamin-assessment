import React, { useState } from "react";
import { SafeAreaView } from "react-navigation";
import { Text, View, ScrollView } from "react-native";
import { StatusBar } from "react-native";

import styles from "./styles";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "mul-mid", fontSize: 36, color: "black" }}>
        Enter Bang Jamin PIN
      </Text>
    </View>
  );
};

export default Welcome;
