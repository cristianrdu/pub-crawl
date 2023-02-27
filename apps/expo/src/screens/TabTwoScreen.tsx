import { ScrollView, View } from "../components/Themed";
import { RootTabScreenProps } from "../types/types";
import { RoutesList } from "../components/RoutesList";

export default function TabTwoScreen({
  navigation,
}: RootTabScreenProps<"TabTwo">) {
  return (
    <ScrollView className="h-full w-full" keyboardDismissMode="on-drag">
      <RoutesList
        direction="vertical"
        title=""
        cardWidth="w-full"
        itemSeparator={<View className="h-4" />}
        navigation={navigation}
      />
    </ScrollView>
  );
}
