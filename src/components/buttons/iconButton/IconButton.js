import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const IconButton = ({ label, children, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {children}
      <Text
        style={{
          fontFamily: "mul-bold",
          fontSize: 12,
          color: "#3F3F3F",
          textAlign: "left",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", gap: 8 },
});
