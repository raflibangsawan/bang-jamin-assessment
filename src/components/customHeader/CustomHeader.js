import { View, Text, StatusBar } from "react-native";
import colors from "../../constants/colors";

const CustomHeader = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: StatusBar.currentHeight,
        padding: 16,
        backgroundColor: colors.white,
      }}
    >
      <Text
        style={{
          fontFamily: "mul-bold",
          fontSize: 20,
          color: colors.black,
          backgroundColor: "#000",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default CustomHeader;
