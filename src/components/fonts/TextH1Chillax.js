import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH1Chillax = ({ text, color, weight }) => {
  return (
    <Text
      style={{
        fontFamily: "chi-mid",
        fontSize: fontSize.h1,
        color: color ? color : colors.black,
        fontWeight: weight ? weight : "normal",
      }}
    >
      {text}
    </Text>
  );
};

export default TextH1Chillax;
