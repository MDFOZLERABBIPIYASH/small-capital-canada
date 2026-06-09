import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Pressable,
  View,
} from "react-native";

import BannerCard from "./BannerCard";
import { bannerInfo } from "../../data/homeData";

const { width } = Dimensions.get("window");

export default function BannerCarousel() {
  const flatListRef = useRef<FlatList>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / width
    );

    if (slideIndex !== activeIndex) {
      setActiveIndex(slideIndex);
    }
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={bannerInfo}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View
            style={{
              width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BannerCard
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </View>
        )}
      />

      {/* Dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 16,
        }}
      >
        {bannerInfo.map((_, index) => {
          const active = activeIndex === index;

          return (
            <Pressable
              key={index}
              onPress={() => {
                flatListRef.current?.scrollToIndex({
                  index,
                  animated: true,
                });

                setActiveIndex(index);
              }}
            >
              <View
                style={{
                  width: active ? 20 : 8,
                  height: 8,
                  borderRadius: 999,
                  marginHorizontal: 4,
                  backgroundColor: active
                    ? "#FFFFFF"
                    : "rgba(255,255,255,0.3)",
                }}
              />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}