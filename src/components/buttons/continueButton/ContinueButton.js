import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import TextRegulerBold from "../../fonts/TextRegulerBold";
import colors from "../../../constants/colors";

const ContinueButton = ({ handleOnPress, isLoading }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      {isLoading && <ActivityIndicator size="small" color={colors.white} />}
      {!isLoading && (
        <TextRegulerBold color={colors.white}>Continue</TextRegulerBold>
      )}
    </TouchableOpacity>
  );
};

export default ContinueButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    width: "100%",
    height: 50,
    color: colors.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
