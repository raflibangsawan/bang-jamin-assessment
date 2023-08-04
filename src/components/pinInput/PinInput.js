import { StyleSheet, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import colors from "../../constants/colors";

export default function PinInput() {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");

  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  const handleBackspace = (event, index) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit1Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(event) => {
            setDigit1(event.target.toFixed);
            if (digit1 !== "") {
              console.log("==================");
              console.log(event);
              // digit2Ref.current.focus();
            }
            if (digit1 === null) {
              digit2Ref.current.focus();
            }
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit2Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(digit2) => {
            setDigit2(digit2);
            if (digit2 !== "") {
              digit3Ref.current.focus();
            } else {
              digit1Ref.current.focus();
            }
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit3Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(digit3) => {
            setDigit3(digit3);
            if (digit3 !== "") {
              digit4Ref.current.focus();
            }
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit4Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(digit4) => {
            setDigit4(digit4);
            if (digit4 !== "") {
              digit5Ref.current.focus();
            }
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit5Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(digit5) => {
            setDigit5(digit5);
            if (digit5 !== "") {
              digit6Ref.current.focus();
            }
          }}
          style={styles.textInput}
        />
      </View>
      <View style={styles.numberInput}>
        <TextInput
          ref={digit6Ref}
          keyboardType="number-pad"
          maxLength={1}
          onChange={(digit6) => setDigit6(digit6)}
          style={styles.textInput}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  numberInput: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.gray,
    width: 50,
    height: 50,
  },
  textInput: {
    fontSize: 30,
  },
});
