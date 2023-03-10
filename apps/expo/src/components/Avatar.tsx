import React from "react";
import { Image } from "react-native";
import Colors from "../constants/Colors";
import { View } from "./Themed";

const imageSrc = require("../../assets/images/steve.jpeg");

type Props = {};

export const Avatar = (props: Props) => {
  return (
    <View
      darkColor={Colors.dark.backgroundSecondary}
      lightColor={Colors.light.backgroundSecondary}
      className="bg-transparent"
    >
      <Image className="h-[40px] w-[40px] rounded-full" source={imageSrc} />
    </View>
  );
};
