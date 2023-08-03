import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH2SemiBold = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-semibold",
        fontSize: fontSize.h2,
        color: color ? color : colors.black,
      }}
    >
      {children}
    </Text>
  );
};

export default TextH2SemiBold;
