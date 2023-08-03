import React from "react";
import { View, Image, useWindowDimensions } from "react-native";
import TextH1ChillaxBold from "../fonts/TextH1ChillaxBold";
import TextReguler from "../fonts/TextReguler";

const CarouselItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        { flex: 1, justifyContent: "center", alignItems: "center" },
        { width },
      ]}
    >
      <Image
        source={item.image}
        style={[
          { flex: 0.7, justifyContent: "center" },
          { width, resizeMode: "contain" },
        ]}
      />

      <View style={{ flex: 0.3, justifyContent: "center" }}>
        <TextH1ChillaxBold color={"white"} textAlign={"center"}>
          {item.title}
        </TextH1ChillaxBold>
        <TextReguler color={"white"} textAlign={"center"}>
          {item.description}
        </TextReguler>
      </View>
    </View>
  );
};

export default CarouselItem;
