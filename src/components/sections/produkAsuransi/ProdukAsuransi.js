import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../../constants/colors";
import IconButton from "../../buttons/iconButton/IconButton";

const ProdukAsuransi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontFamily: "mul-bold",
            fontSize: 16,
            color: colors.black,
            textAlign: "left",
          }}
        >
          Produk Asuransi
        </Text>
        <Text
          style={{
            fontFamily: "mul-semibold",
            fontSize: 12,
            color: colors.gray,
            textAlign: "left",
          }}
        >
          Pilih produk asuransi yang di butuhkan
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <IconButton label={"Mobil"}>
          <Image
            source={require("../../../../assets/icons/car.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
        <IconButton label={"Motor"}>
          <Image
            source={require("../../../../assets/icons/bike.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
        <IconButton label={"Truk"}>
          <Image
            source={require("../../../../assets/icons/truck.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default ProdukAsuransi;
