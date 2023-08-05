import { Text, View, Image } from "react-native";
import React from "react";
import styles from "./styles";
import colors from "../../../constants/colors";
import IconButton from "../../buttons/iconButton/IconButton";

const RuangKerja = ({ navigation }) => {
  const handleOnPress = () => {
    navigation.navigate("Nasabah");
  };

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
          Ruang Kerja
        </Text>
        <Text
          style={{
            fontFamily: "mul-semibold",
            fontSize: 12,
            color: colors.gray,
            textAlign: "left",
          }}
        >
          Cek status polis, klaim dan penarikan komisi
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <IconButton label={"Penjualan"}>
          <Image
            source={require("../../../../assets/icons/penjualan.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
        <IconButton label={"Tarik Komisi"}>
          <Image
            source={require("../../../../assets/icons/tarik.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
        <IconButton label={"Nasabah"} onPress={handleOnPress}>
          <Image
            source={require("../../../../assets/icons/nasabah.png")}
            style={styles.infoImageIcon}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default RuangKerja;
