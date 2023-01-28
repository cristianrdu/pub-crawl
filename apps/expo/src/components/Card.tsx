import { StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Text, View } from "./Themed";
import Colors from "../constants/Colors";

const imageSrc = require("../../assets/images/pub-crawl.jpeg");

export const Card: React.FC<{
  title: string;
  rating: string;
  img?: any;
  cardWidth?: string;
  onPress: () => void;
}> = ({ title, rating, img, onPress, cardWidth = "w-56" }) => {
  return (
    <ImageBackground
      className={`mr-4 h-56 justify-center ${cardWidth}`}
      source={imageSrc}
      resizeMode="stretch"
    >
      <View className="flex h-full justify-between rounded-lg bg-black/40 px-5 pt-4">
        <View className="flex flex-row justify-between bg-transparent">
          <Text
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            className={`text-xl font-semibold text-white ${
              !title ? "italic" : ""
            }`}
          >
            {title || "Untitled"}
          </Text>
          <Text className={`text-white ${!rating ? "italic" : ""}`}>
            {rating || "No content"}
            <AntDesign name="star" size={20} color="white" />
          </Text>
        </View>
        <View className="flex flex-row justify-between bg-transparent pb-2">
          <View className="flex flex-row items-center bg-transparent">
            <Text className="mb-1 mr-1 font-bold uppercase text-white">12</Text>
            <View className="mb-1 rounded-full bg-white p-0.5">
              <Entypo name="location-pin" size={20} color="black" />
            </View>
          </View>
          <View className="mt-1 bg-transparent">
            <TouchableOpacity
              className="w-[120px] items-center justify-center rounded-full bg-yellow-400 py-3"
              onPress={onPress}
            >
              <Text className="font-bold text-black">Start Crawl</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
