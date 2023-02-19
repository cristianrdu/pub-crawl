import React from "react";
import { View, Text } from "react-native";

export const CrawlClosed = (props: any) => {
  return (
    <View className="h-full w-full flex-row justify-center gap-x-3 self-center overflow-hidden pt-[18px]">
      <Text className="w-[33%] text-center">Locations: 12</Text>
      <Text
        numberOfLines={1}
        className="w-[33%] overflow-hidden text-ellipsis text-center font-bold"
      >
        Pub Crawl Name
      </Text>
      <Text className="w-[33%] text-center">Duration: 4h</Text>
    </View>
  );
};
