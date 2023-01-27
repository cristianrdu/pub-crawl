import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import Colors from "../constants/Colors";
import defaultStyles from "../constants/defaultStyles";
import { MonoText } from "./StyledText";
import { SearchBar } from "./SearchBar";

const imageSrc = require("../../assets/images/steve.jpeg");

type Props = {};

export const TopBar = (props: Props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState("");

  const updateSearch = (search: any) => {
    setSearch(search);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.left}>
          <MonoText fontFamiliy={"space-mono-bold"} style={[styles.headerText]}>
            Routes
          </MonoText>
          <Pressable style={[styles.pressableStyle]}>
            <FontAwesome5 name="plus" size={24} color={Colors.yellow} />
          </Pressable>
        </View>
        <View style={styles.right}>
          <Image style={styles.image} source={imageSrc} />
        </View>
      </View>
      <SearchBar
        clicked={clicked}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
        searchPhrase={searchPhrase}
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
