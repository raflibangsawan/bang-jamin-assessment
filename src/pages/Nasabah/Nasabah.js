import { ScrollView, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../constants/colors";

const Nasabah = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </ScrollView>
  );
};

export default Nasabah;
