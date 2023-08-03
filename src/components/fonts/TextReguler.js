import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextReguler = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-mid",
        fontSize: fontSize.reguler,
        color: color ? color : colors.black,
      }}
    >
      {children}
    </Text>
  );
};

export default TextReguler;
