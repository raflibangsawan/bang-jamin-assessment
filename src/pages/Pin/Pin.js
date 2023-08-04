import { StyleSheet, View, Image, ToastAndroid } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import colors from "../../constants/colors";
import TextH2SemiBold from "../../components/fonts/TextH2SemiBold";
import TextReguler from "../../components/fonts/TextReguler";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import ContinueButton from "../../components/buttons/continueButton/ContinueButton";

const Pin = ({ navigation, route }) => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userEmail = route.params.text;

  const handleOnPress = async () => {
    if (pin.length === 6) {
      setIsLoading(true);
      await axios
        .post(API_URL.login, { email: userEmail, password: pin })
        .then((response) => {
          console.log(response.data);
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/logo-bg-white-fit.png")}
        style={styles.logoImage}
      />
      <TextH2SemiBold color={colors.black}>Enter Bang Jamin PIN</TextH2SemiBold>
      <TextReguler color={colors.darkGray}>{userEmail}</TextReguler>
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
      <ContinueButton handleOnPress={handleOnPress} isLoading={isLoading} />
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
