import React from "react";
import { FlatList, View } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import slides from "./slides";

const Carousel = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <CarouselItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
      />
    </View>
  );
};

export default Carousel;
