import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH3 = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-mid",
        fontSize: fontSize.h3,
        color: color ? color : colors.black,
      }}
    >
      {children}
    </Text>
  );
};

export default TextH3;
