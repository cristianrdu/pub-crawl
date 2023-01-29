import { View } from "./Themed";
import { MonoText } from "./StyledText";
import Colors from "../constants/Colors";
import { Card } from "./Card";
import { FlashList } from "@shopify/flash-list";

export function RoutesList({
  cardWidth = "",
  direction,
  title,
  itemSeparator = <View className="h-2" />,
  listHeight = "h-full",
}: {
  cardWidth?: string;
  direction: string;
  title: string;
  itemSeparator?: JSX.Element;
  listHeight?: string;
}) {
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
    <View className="bg-transparent p-4">
      <MonoText
        className="mb-3 text-xl"
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
        fontFamiliy={"space-mono-bold"}
      >
        {title}
      </MonoText>
      <View className={`w-full ${listHeight}`}>
        <FlashList
          data={cards}
          estimatedItemSize={30}
          horizontal={direction === "horizontal" ? true : false}
          ItemSeparatorComponent={() => itemSeparator}
          renderItem={(p) => (
            <Card
              cardWidth={cardWidth}
              title={p.item.title}
              rating={p.item.rating}
              key={p.item.title}
              onPress={() => console.warn("PRESSSS")}
            />
          )}
        />
      </View>
    </View>
  );
}
