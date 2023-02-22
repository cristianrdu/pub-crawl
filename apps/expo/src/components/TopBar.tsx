import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Platform, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { View, SafeAreaView } from "./Themed";
import { Input } from "./Input";
import { Avatar } from "./Avatar";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootTabParamList, RootStackParamList } from "../types/types";

export const TopBar = ({
  title,
  navigation,
}: {
  title: string;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "TabTwo", undefined>,
    NativeStackNavigationProp<RootStackParamList, "Root", undefined>
  >;
}) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView
      className={`${Platform.OS === "ios" ? "" : "mt-5"}`}
      darkColor={Colors.dark.backgroundSecondary}
      lightColor={Colors.light.backgroundSecondary}
    >
      <View
        className="flex flex-row items-end justify-between p-5"
        darkColor={Colors.dark.backgroundSecondary}
        lightColor={Colors.light.backgroundSecondary}
      >
        <View
          className="flex flex-row items-center"
          darkColor={Colors.dark.backgroundSecondary}
          lightColor={Colors.light.backgroundSecondary}
        >
          <MonoText
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            fontFamiliy={"space-mono-bold"}
            className="text-3xl"
          >
            {title}
          </MonoText>
          <Pressable
            className="mb-1 ml-1.5"
            onPress={() => navigation.navigate("CreateNewRoute")}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <FontAwesome5 name="plus" size={24} color={Colors.yellow} />
          </Pressable>
        </View>
        <View
          darkColor={Colors.dark.backgroundSecondary}
          lightColor={Colors.light.backgroundSecondary}
        >
          <Avatar />
        </View>
      </View>
      <Input
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        lightBg={Colors.light.inputBoxBackground}
        darkBg={Colors.dark.inputBoxBackground}
        lightColor={Colors.light.textShaded}
        darkColor={Colors.dark.textShaded}
        showSearchIcon
        placeholder="Search"
      />
    </SafeAreaView>
  );
};
