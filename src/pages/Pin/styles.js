import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

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

export default styles;
