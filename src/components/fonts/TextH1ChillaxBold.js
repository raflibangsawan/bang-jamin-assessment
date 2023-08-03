import React from "react";
import { Text } from "react-native";
import fontSize from "../../constants/fontSize";
import colors from "../../constants/colors";

const TextH1ChillaxBold = ({ children, color }) => {
  return (
    <Text
      style={{
        fontFamily: "chi-bold",
        fontSize: fontSize.h1,
        color: color ? color : colors.black,
      }}
    >
      {children}
    </Text>
  );
};

export default TextH1ChillaxBold;
