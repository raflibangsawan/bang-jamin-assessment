import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: "100%",
  },
  image: {
    flex: 0.6,
    justifyContent: "center",
    width: "100%",
  },
  form: {
    flex: 0.4,
    gap: 10,
    width: "100%",
    justifyContent: "flex-start",
    padding: 20,
  },
  logoImage: {
    resizeMode: "contain",
    width: 120,
  },
  input: {
    borderColor: "#E3E3E3",
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    paddingHorizontal: 16,
  },
});

export default styles;
