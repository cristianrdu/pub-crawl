// SearchBar.js
import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useThemeColor } from "./Themed";

type SearchBarProps = {
  clicked: any;
  searchPhrase: any;
  setSearchPhrase: any;
  setClicked: any;
  lightBg: any;
  darkBg: any;
  lightColor: any;
  darkColor: any;
};

export const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  lightBg,
  darkBg,
  lightColor,
  darkColor,
}: SearchBarProps) => {
  const backgroundColor = useThemeColor(
    { light: lightBg, dark: darkBg },
    "inputBoxBackground",
  );
  const color = useThemeColor(
    { light: lightColor, dark: darkColor },
    "textShaded",
  );
  return (
    <View style={styles.container}>
      <View
        style={[
          { backgroundColor },
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked,
        ]}
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color={color}
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

export const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback
    accessible={false}
    onPress={() => Keyboard.dismiss()}
  >
    {children}
  </TouchableWithoutFeedback>
);
