import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: { width: "100%" },
  contentContainer: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  infoImageIcon: {
    resizeMode: "contain",
    width: 65,
    height: 65,
    borderRadius: 99,
  },
  dividerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 1,
  },
  divider: {
    height: 1,
    backgroundColor: colors.gray,
    opacity: 0.1,
    marginVertical: 10,
    width: "90%",
  },
});

export default styles;
