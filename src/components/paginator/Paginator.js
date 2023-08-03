import React from "react";
import { View, Animated, useWindowDimensions } from "react-native";
import colors from "../../constants/colors";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flexDirection: "row" }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              {
                height: 10,
                borderRadius: 5,
                backgroundColor: colors.white,
                marginHorizontal: 8,
              },
              { width: dotWidth, opacity },
            ]}
            key={i.toString()}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;
