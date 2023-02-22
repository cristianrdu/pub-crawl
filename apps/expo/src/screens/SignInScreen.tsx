import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { log } from "../../logger";
import { RootStackScreenProps } from "../../types";
import { SignInWithOauth } from "../components/SignInWithOauth";

export default function SignInScreen({
  navigation,
}: RootStackScreenProps<"SignIn">) {
  const { signIn, setSession, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const onSignUpPress = () => navigation.replace("SignUp");

  return (
    <View className="flex-[1] items-center justify-start bg-[#fff] pt-5">
      <View className="mb-5 w-11/12 border-b border-b-current">
        <SignInWithOauth />
      </View>

      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={password}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="Password..."
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        className="mt-12 h-14 w-11/12 items-center justify-center rounded-md bg-black text-white"
        onPress={onSignInPress}
      >
        <Text className="font-bold text-white">Sign in</Text>
      </TouchableOpacity>

      <View className="fle-[1] mt-5 items-center justify-start bg-white text-black">
        <Text>Have an account?</Text>

        <TouchableOpacity
          className="mt-4 items-center justify-center rounded-md border border-black bg-white p-3"
          onPress={onSignUpPress}
        >
          <Text className="font-bold text-black">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
