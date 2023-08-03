import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextSmall = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-mid",
        fontSize: fontSize.small,
        color: color ? color : colors.black,
      }}
    >
      {children}
    </Text>
  );
};

export default TextSmall;
