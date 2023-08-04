import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    height: "25%",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    flexDirection: "row",
  },
  body: {
    paddingHorizontal: 16,
    gap: 22,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    width: 300,
    marginLeft: -50,
    zIndex: 2,
  },
});

export default styles;
