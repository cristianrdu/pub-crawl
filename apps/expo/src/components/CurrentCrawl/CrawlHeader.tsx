import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, View, Text, TouchableOpacity } from "react-native";

const imageSrc = require("../../../assets/images/steve.jpeg");

type Props = {
  crawlImage: any;
  crawlTitle: any;
  likes: any;
  locationCount: any;
  duration: any;
};

export const CrawlHeader = ({}: // crawlImage,
// crawlTitle,
// likes,
// locationCount,
// duration,
Props) => {
  return (
    <View>
      <View className="mt-6 flex w-full flex-row items-center justify-between px-5">
        <View className="flex flex-col gap-y-3 self-start">
          <Text className="mb-2 text-lg font-bold">Mort Centru</Text>
          <View className="flex flex-row items-center">
            <View>
              <AntDesign name="heart" size={20} color="black" />
            </View>
            <Text className="ml-1">142</Text>
          </View>
          <View className="flex flex-row items-center">
            <View>
              <Ionicons name="location-sharp" size={20} color="black" />
            </View>
            <Text className="ml-1 text-right">12</Text>
          </View>
          <View className="flex flex-row items-center">
            <View>
              <AntDesign name="hourglass" size={20} color="black" />
            </View>
            <Text className="ml-1 text-right">4 hours</Text>
          </View>
        </View>
        <Image
          className="h-[180px] w-[180px] max-w-[%50] rounded-xl"
          source={imageSrc}
        />
      </View>
      <View className="mt-5 items-center shadow-sm shadow-[#000]/30">
        <TouchableOpacity
          className="w-[240px] items-center justify-center rounded-full bg-yellow-400 py-3"
          onPress={() => null}
        >
          <Text className="font-bold text-black">Start Crawl</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
