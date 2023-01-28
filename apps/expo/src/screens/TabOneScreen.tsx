import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, ScrollView } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { FeaturedList } from "../components/FeaturedList";
import { CommunityList } from "../components/CommunityList";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <FeaturedList />
      <CommunityList />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
