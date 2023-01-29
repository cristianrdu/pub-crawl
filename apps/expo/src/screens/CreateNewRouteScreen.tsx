import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, Image, Button, TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import * as ImagePicker from "expo-image-picker";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export function CreateNewRouteScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // console.warn(status);

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View
      darkColor={Colors.dark.background}
      lightColor={Colors.light.background}
      className="flex h-full flex-col items-center justify-start"
    >
      <View className="mt-20 mb-4">
        <Input
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
          lightBg={Colors.light.inputBoxBackground}
          darkBg={Colors.dark.inputBoxBackground}
          lightColor={Colors.light.textShaded}
          darkColor={Colors.dark.textShaded}
          placeholder={"Route Name"}
        />
      </View>
      <View className="flex w-full items-center justify-center">
        {image ? (
          <Image source={{ uri: image }} className="h-64 w-64" />
        ) : (
          <View
            darkColor={Colors.light.background}
            lightColor={Colors.dark.background}
            className="h-64 w-64"
          />
        )}
        <TouchableOpacity
          className="mt-6 w-[250px] items-center justify-center rounded-full bg-yellow-400 py-4"
          onPress={pickImage}
        >
          <Text className="font-semibold">Pick an image from camera roll</Text>
        </TouchableOpacity>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
