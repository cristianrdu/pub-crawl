import { ScrollView, View } from "../components/Themed";
import { RootTabScreenProps } from "../types/types";
import { RoutesList } from "../components/RoutesList";
import { CommunityList } from "../components/CommunityList";
import { useEffect } from "react";
import { api, type RouterOutputs } from "../utils/api";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const routeQuery = api.route.all.useQuery();
  console.log("routeQuery", routeQuery.data);

  // const [showPost, setShowPost] = React.useState<string | null>(null);

  // const deletePostMutation = api.post.delete.useMutation({
  //   onSettled: () => postQuery.refetch(),
  // });

  useEffect(() => {}, []);
  return (
    <ScrollView keyboardDismissMode="on-drag">
      <RoutesList
        listHeight="h-fit"
        cardWidth="w-56"
        direction="horizontal"
        title="Featured"
      />
      <CommunityList />
    </ScrollView>
  );
}
