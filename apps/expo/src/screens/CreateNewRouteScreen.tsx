import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, Image, Button } from "react-native";
import { Input } from "../components/Input";
import { launchImageLibrary } from "react-native-image-picker";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

const SERVER_URL = "http://localhost:3000";

const createFormData = (photo: any, body = {}) => {
  const data = new FormData();

  data.append("photo", {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

export function CreateNewRouteScreen() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [photo, setPhoto] = useState(null);
  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${"SERVER_URL"}/api/upload`, {
      method: "POST",
      body: createFormData(photo, { userId: "123" }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <View
      darkColor={Colors.dark.background}
      lightColor={Colors.light.background}
      className="flex h-full flex-row items-start justify-center"
    >
      <View className="mt-8">
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {photo && (
          <>
            <Image
              source={{ uri: photo.uri }}
              style={{ width: 300, height: 300 }}
            />
            <Button title="Upload Photo" onPress={handleUploadPhoto} />
          </>
        )}
        <Button title="Choose Photo" onPress={handleChoosePhoto} />
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
