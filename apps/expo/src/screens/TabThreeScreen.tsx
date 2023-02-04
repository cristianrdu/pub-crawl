import { ScrollView, Text } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { RoutesList } from "../components/RoutesList";

export default function TabThreeScreen({}) {
  return (
    <ScrollView className="h-full w-full" keyboardDismissMode="on-drag">
      <Text>PAGE THREE</Text>
    </ScrollView>
  );
}
