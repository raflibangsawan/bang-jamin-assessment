import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextRegulerBold = ({ children, color, textAlign, opacity }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-bold",
        fontSize: fontSize.reguler,
        color: color ? color : colors.black,
        textAlign: textAlign ? textAlign : "left",
        opacity: opacity ? opacity : 1,
      }}
    >
      {children}
    </Text>
  );
};

export default TextRegulerBold;
