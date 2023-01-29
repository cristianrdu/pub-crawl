import { Image } from "react-native";
import { Text, View } from "./Themed";
import { Card } from "./Card";
import Colors from "../constants/Colors";
import { Avatar } from "./Avatar";

const imageSrc2 = require("../../assets/images/crawl.jpeg");

export const Post: React.FC<{
  title: string;
  route: any;
  cardWidth?: string;
  onPress: () => void;
}> = ({ title, route, cardWidth = "w-56" }) => {
  return (
    <View className={`flex w-full`}>
      <View className="mb-2 flex w-full flex-row items-center">
        <Avatar />
        <View className="ml-1">
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            className="text-sm"
          >
            Cristol
          </Text>
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            className="text-xs opacity-50"
          >
            2 hours ago
          </Text>
        </View>
      </View>
      <Text
        className="mb-2 text-base"
        lightColor={Colors.light.text}
        darkColor={Colors.dark.text}
      >
        {title}
      </Text>
      <View className="mb-4 flex flex-row justify-between">
        <Image className="w-[48%] rounded-xl" source={imageSrc2} />
        <Image className="w-[48%] rounded-xl" source={imageSrc2} />
      </View>
      <Card
        onPress={() => console.warn("PRESSSS")}
        title={route.title}
        rating={route.rating}
        cardWidth="w-full"
      />
    </View>
  );
};
