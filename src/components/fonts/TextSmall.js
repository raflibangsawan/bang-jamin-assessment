import React from "react";
import { Text } from "react-native";
import colors from "../../constants/colors";

const TextSmall = ({ children, color, size }) => {
  return (
    <Text
      style={{
        fontFamily: "mul-semibold",
        fontSize: size,
        color: color ? color : colors.black,
        textAlign: "center",
      }}
    >
      {children}
    </Text>
  );
};

export default TextSmall;
