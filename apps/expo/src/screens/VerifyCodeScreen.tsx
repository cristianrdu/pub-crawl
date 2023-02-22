import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { RootStackScreenProps } from "../types/types";
import { log } from "../../logger";

export default function VerifyCodeScreen({
  navigation,
}: RootStackScreenProps<"VerifyCode">) {
  const { isLoaded, signUp, setSession } = useSignUp();

  const [code, setCode] = React.useState("");

  const onPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  return (
    <View className="flex-[1] items-center justify-start bg-[#fff] pt-5">
      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={code}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="Code..."
          placeholderTextColor="#000"
          onChangeText={(code) => setCode(code)}
        />
      </View>
      <TouchableOpacity
        className="mt-12 h-14 w-11/12 items-center justify-center rounded-md bg-black text-white"
        onPress={onPress}
      >
        <Text className="font-bold text-white">Verify Email</Text>
      </TouchableOpacity>
    </View>
  );
}
