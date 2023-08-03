import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH1ChillaxBold = ({ children, color, textAlign }) => {
  return (
    <Text
      style={{
        fontFamily: "chi-bold",
        fontSize: fontSize.h1,
        color: color ? color : colors.black,
        textAlign: textAlign ? textAlign : "left",
        lineHeight: 30,
      }}
    >
      {children}
    </Text>
  );
};

export default TextH1ChillaxBold;
