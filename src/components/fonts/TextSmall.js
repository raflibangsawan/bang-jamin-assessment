import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextSmall = ({ text, color, weight }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-mid",
        fontSize: fontSize.small,
        color: color ? color : colors.black,
        fontWeight: weight ? weight : "normal",
      }}
    >
      {text}
    </Text>
  );
};

export default TextSmall;
