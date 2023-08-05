import { ScrollView, ActivityIndicator, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles";
import colors from "../../constants/colors";
import UserCard from "../../components/userCard/UserCard";
import API_URL from "../../constants/apiUrl";

const Nasabah = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async () => {
    const response = await axios.get(API_URL.users);
    setData(response.data.data);
    console.log(response.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {!isLoading && (
        <FlatList
          scrollEnabled
          data={data}
          renderItem={({ item }) => (
            <UserCard
              email={item.email}
              name={item.first_name + " " + item.last_name}
              image={item.avatar}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default Nasabah;
