import { View } from "./Themed";
import { MonoText } from "./StyledText";
import Colors from "../constants/Colors";
import { FlashList } from "@shopify/flash-list";
import { Post } from "./Post";

export function CommunityList() {
  const posts = [
    {
      title: "Amazing night",
      route: { title: "Betie in Infinity", rating: "5.0" },
    },
    {
      title: "Amazing night",
      route: { title: "Betie in Infinity", rating: "5.0" },
    },
    {
      title: "Amazing night",
      route: { title: "Betie in Infinity", rating: "5.0" },
    },
    {
      title: "Amazing night",
      route: { title: "Betie in Infinity", rating: "5.0" },
    },
  ];
  return (
    <View className="max-w-full bg-transparent p-4">
      <MonoText
        className="mb-3 text-xl"
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
        fontFamiliy={"space-mono-bold"}
      >
        Community
      </MonoText>
      <View className="h-full w-full">
        <FlashList
          data={posts}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-4" />}
          renderItem={(p) => (
            <Post
              title={p.item.title}
              route={p.item.route}
              key={p.item.title}
              onPress={() => console.warn("PRESSSS")}
            />
          )}
        />
      </View>
    </View>
  );
}
