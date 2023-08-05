import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: "100%",
    width: "100%",
  },
  contentContainer: {
    backgroundColor: colors.white,
    alignItems: "flex-start",
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});

export default styles;
