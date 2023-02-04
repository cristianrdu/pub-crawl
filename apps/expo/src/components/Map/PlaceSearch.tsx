import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import * as Location from "expo-location";

import { GOOGLE_API_KEY } from "../../../env.json";

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
  userLocation: Location.LocationObject;
};

export function PlaceSearch({
  label,
  placeholder,
  onPlaceSelected,
  userLocation,
}: InputAutocompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <Text>
        User Location{" "}
        {`Lat: ${userLocation?.coords?.latitude}, Lng: ${userLocation?.coords?.longitude}`}
      </Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          console.log(data);
          console.log(details);
          onPlaceSelected(details);
        }}
        enablePoweredByContainer={false}
        debounce={200}
        minLength={2}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
          location: `${userLocation?.coords?.latitude},${userLocation?.coords?.longitude}`,
          radius: 50000,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});
