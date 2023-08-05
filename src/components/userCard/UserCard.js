import { View, Image } from "react-native";
import React from "react";
import styles from "./styles";

import TextRegulerBold from "../fonts/TextRegulerBold";
import TextRegulerSemiBold from "../fonts/TextRegulerSemiBold";

const UserCard = ({ name, email, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          source={{ uri: "https://reqres.in/img/faces/1-image.jpg" }}
          style={styles.infoImageIcon}
        />
        <View>
          <TextRegulerSemiBold>Rafli Bangsawan</TextRegulerSemiBold>
          <TextRegulerBold>raflibangsawans@ui.ac.id</TextRegulerBold>
        </View>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
      </View>
    </View>
  );
};

export default UserCard;
