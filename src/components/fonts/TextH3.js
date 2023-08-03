import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH3 = ({ text, color, weight }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-mid",
        fontSize: fontSize.h3,
        color: color ? color : colors.black,
        fontWeight: weight ? weight : "normal",
      }}
    >
      {text}
    </Text>
  );
};

export default TextH3;
