import { ScrollView, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { RoutesList } from "../components/RoutesList";
import { CommunityList } from "../components/CommunityList";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <RoutesList
        listHeight="h-fit"
        cardWidth="w-56"
        direction="horizontal"
        title="Featured"
        navigation={navigation}
      />
      <CommunityList />
    </ScrollView>
  );
}
