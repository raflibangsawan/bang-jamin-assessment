import React, { useState, useRef } from "react";
import { FlatList, View, Animated } from "react-native";

import CarouselItem from "../carouselItem/CarouselItem";
import Paginator from "../paginator/Paginator";
import slides from "./slides";

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) =>
    setCurrentIndex(viewableItems[0].index)
  ).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        maxHeight: "80%",
      }}
    >
      <View style={{ flex: 1 }}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <CarouselItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
    </View>
  );
};

export default Carousel;
