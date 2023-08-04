import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import colors from "../../constants/colors";
import TextH2SemiBold from "../../components/fonts/TextH2SemiBold";
import TextReguler from "../../components/fonts/TextReguler";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import ContinueButton from "../../components/buttons/continueButton/ContinueButton";

const Pin = ({ navigation, route }) => {
  const [pin, setPin] = useState();
  const handleOnPress = () => {
    if (pin.length === 6) {
      console.log("fulfilled");
    } else {
      console.log("not fulfilled");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo-bg-white-fit.png")}
        style={styles.logoImage}
      />
      <TextH2SemiBold>Enter Bang Jamin PIN</TextH2SemiBold>
      <TextReguler color={colors.darkGray}>{route.params.text}</TextReguler>
      <SmoothPinCodeInput
        cellSize={48}
        animated={false}
        restrictToNumbers
        cellSpacing={10}
        cellStyle={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.gray,
        }}
        cellStyleFocused={{
          borderColor: colors.primary,
        }}
        codeLength={6}
        value={pin}
        onTextChange={setPin}
      />
      <ContinueButton handleOnPress={handleOnPress} />
    </View>
  );
};

export default Pin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
  },
  logoImage: {
    resizeMode: "contain",
    width: 120,
  },
});
