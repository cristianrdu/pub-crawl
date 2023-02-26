import * as React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "../components/Themed";
import { useSignUp } from "@clerk/clerk-expo";
import { log } from "../../logger";
import { RootStackScreenProps } from "../types/types";
import { SignUpWithOauth } from "../components/SignUpWithOauth";

export default function SignUpScreen({
  navigation,
}: RootStackScreenProps<"SignUp">) {
  const { isLoaded, signUp } = useSignUp();
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // https://docs.clerk.dev/popular-guides/passwordless-authentication
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      navigation.navigate("VerifyCode");
    } catch (err: any) {
      log("Error:> " + err?.status || "");
      log("Error:> " + err?.errors ? JSON.stringify(err.errors) : err);
    }
  };

  const onSignInPress = () => navigation.replace("SignIn");

  return (
    <View className="flex-[1] items-center justify-start bg-[#fff] pt-5">
      <View className="mb-5 w-11/12 border-b border-b-current">
        <SignUpWithOauth />
      </View>

      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={firstName}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="First name..."
          placeholderTextColor="#000"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          value={lastName}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="Last name..."
          placeholderTextColor="#000"
          onChangeText={(lastName) => setLastName(lastName)}
        />
      </View>

      <View className="mb-5 h-12 w-11/12 rounded-md border border-solid border-black">
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          className="ml-3 h-14 flex-[1] p-3"
          placeholder="Email..."
          placeholderTextColor="#000"
          onChangeText={(email) => setEmailAddress(email)}
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
        onPress={onSignUpPress}
      >
        <Text className="font-bold text-white">Sign up</Text>
      </TouchableOpacity>

      <View className="fle-[1] mt-5 items-center justify-start bg-white text-black">
        <Text>Have an account?</Text>

        <TouchableOpacity
          className="mt-4 items-center justify-center rounded-md border border-black bg-white p-3"
          onPress={onSignInPress}
        >
          <Text className="font-bold text-black">Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
