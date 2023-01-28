import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Pressable, Image } from "react-native";
import Colors from "../constants/Colors";
import defaultStyles from "../constants/defaultStyles";
import { MonoText } from "./StyledText";
import { View, SafeAreaView } from "./Themed";
import { SearchBar } from "./SearchBar";

const imageSrc = require("../../assets/images/steve.jpeg");

type Props = {};

export const TopBar = (props: Props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <SafeAreaView
      darkColor={Colors.dark.backgroundSecondary}
      lightColor={Colors.light.backgroundSecondary}
    >
      <View
        darkColor={Colors.dark.backgroundSecondary}
        lightColor={Colors.light.backgroundSecondary}
        style={styles.container}
      >
        <View
          darkColor={Colors.dark.backgroundSecondary}
          lightColor={Colors.light.backgroundSecondary}
          style={styles.left}
        >
          <MonoText
            lightColor={Colors.light.text}
            darkColor={Colors.dark.text}
            fontFamiliy={"space-mono-bold"}
            style={[styles.headerText]}
          >
            Routes
          </MonoText>
          <Pressable style={[styles.pressableStyle]}>
            <FontAwesome5 name="plus" size={24} color={Colors.yellow} />
          </Pressable>
        </View>
        <View
          darkColor={Colors.dark.backgroundSecondary}
          lightColor={Colors.light.backgroundSecondary}
          style={styles.right}
        >
          <Image style={styles.image} source={imageSrc} />
        </View>
      </View>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
        lightBg={Colors.light.inputBoxBackground}
        darkBg={Colors.dark.inputBoxBackground}
        lightColor={Colors.light.textShaded}
        darkColor={Colors.dark.textShaded}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    display: "flex",
    flexDirection: "row",
  },
  right: {
    display: "flex",
    flexDirection: "row",
  },
  headerText: {
    fontSize: defaultStyles.fontSize.s30,
  },
  pressableStyle: {
    marginLeft: 5,
    marginTop: 10,
  },
  image: {
    borderRadius: 50,
    height: 40,
    width: 40,
  },
});
