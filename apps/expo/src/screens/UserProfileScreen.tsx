/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { SafeAreaView, Text } from "../components/Themed";
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { log } from "../../logger";
import { useAuth, useUser } from "@clerk/clerk-expo";
import Colors from "../constants/Colors";

export default function UserProfileScreen() {
  const { getToken, signOut } = useAuth();
  const { user } = useUser();

  const [sessionToken, setSessionToken] = useState("");

  const onSignOutPress = async () => {
    try {
      await signOut();
    } catch (err: any) {
      log(`Error:> ${err?.status}` || "");
      log(`Error:> ${err?.errors ? JSON.stringify(err.errors) : err}`);
    }
  };

  useEffect(() => {
    const scheduler = setInterval(() => {
      void (async () => {
        const token = await getToken();
        setSessionToken(token as string);
      })();
    }, 1000);

    return () => clearInterval(scheduler);
  }, []);

  return (
    <SafeAreaView
      darkColor={Colors.dark.background}
      lightColor={Colors.light.background}
      className="flex h-full flex-col items-center justify-start"
    >
      <Text className="text-base font-bold">Hello {user?.firstName}</Text>
      <TouchableOpacity onPress={onSignOutPress} className="mt-4 py-4">
        <Text className="text-#2e78b7 text-sm">Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
