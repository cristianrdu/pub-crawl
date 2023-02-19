import { Image, Text, View } from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const imageSrc = require("../../../assets/images/pub-crawl.jpeg");

export const Card: React.FC<{
  title: string;
  img?: any;
  distance: number;
  onPress: () => void;
}> = ({ title, distance, img, onPress }) => {
  return (
    <View className="rounded-lg bg-white shadow-sm">
      <View className="flex flex-row justify-between p-5">
        <Image
          className="max-h-[100px] w-[150px] rounded-xl"
          source={imageSrc}
        />
        <View className="ml-2 mb-1 flex flex-col justify-center">
          <Text>{title || "Untitled"}</Text>
          <Text className="mt-2">
            {distance ? `${distance} mins  ` : "No content"}
            <FontAwesome5 name="walking" size={18} color="black" />
          </Text>
        </View>
        <View className="self-center">
          <Ionicons name="reorder-three-sharp" size={20} color="black" />
        </View>
      </View>
    </View>
  );
};
