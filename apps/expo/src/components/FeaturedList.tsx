import { StyleSheet } from "react-native";

import EditScreenInfo from "./EditScreenInfo";
import { Text, View, ScrollView } from "./Themed";
import { RootTabScreenProps } from "../../types";
import { MonoText } from "./StyledText";
import Colors from "../constants/Colors";
import { Card } from "./Card";
import { FlashList } from "@shopify/flash-list";

export function FeaturedList() {
  const cards = [
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
    { title: "FIrst post", rating: "4.3" },
    { title: "Second post", rating: "4.3" },
    { title: "Third post", rating: "4.3" },
  ];
  return (
    <ScrollView className="p-4" keyboardDismissMode="on-drag">
      <MonoText
        className="mb-3 text-xl"
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
        fontFamiliy={"space-mono-bold"}
      >
        Featured
      </MonoText>
      <View className="h-full w-full">
        <FlashList
          data={cards}
          estimatedItemSize={20}
          horizontal
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(p) => (
            <Card
              title={p.item.title}
              rating={p.item.rating}
              key={p.item.title}
              onPress={() => console.warn("PRESSSS")}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
