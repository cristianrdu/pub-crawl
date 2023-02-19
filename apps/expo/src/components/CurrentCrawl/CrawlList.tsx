import { FlashList } from "@shopify/flash-list";
import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from "react-native";
import { DrawerState } from "../BottomDrawerSwipeUp";
import { Card } from "./Card";

export const CrawlList = (props: any) => {
  const posts = [1, 2, 3, 4, 5, 6];
  const panelHeight = DrawerState.Open - DrawerState.Peek - 34;
  console.warn(panelHeight);
  return (
    <View
      className="mt-5 h-fit px-5"
      onMoveShouldSetResponder={(e) => {
        e.stopPropagation();
        return false;
      }}
    >
      <Text className="font-base font-semibold">Stops</Text>
      <ScrollView>
        <View className={`mt-5 w-full h-[${panelHeight}px]`}>
          <FlashList
            data={posts}
            estimatedItemSize={20}
            ItemSeparatorComponent={() => <View className="h-4" />}
            renderItem={(p) => (
              <Card
                title={"Infinity Games" + p.item}
                distance={4}
                key={p.item}
                onPress={() => console.warn("PRESSSS")}
              />
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
