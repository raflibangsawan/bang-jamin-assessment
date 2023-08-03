import colors from "../../constants/colors";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import fontSize from "../../constants/fontSize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    fontSize: "100px",
    fontFamily: "mul-mid",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
