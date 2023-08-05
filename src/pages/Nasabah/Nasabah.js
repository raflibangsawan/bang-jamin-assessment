import { ScrollView, ActivityIndicator, View } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import colors from "../../constants/colors";
import UserCard from "../../components/userCard/UserCard";

const Nasabah = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!isLoading && (
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <UserCard />
          <UserCard />
          <UserCard />
        </ScrollView>
      )}
    </View>
  );
};

export default Nasabah;
