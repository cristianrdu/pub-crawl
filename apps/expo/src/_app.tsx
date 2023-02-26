import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/api";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./utils/cache";
import Constants from "expo-constants";

export const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ClerkProvider
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        publishableKey={Constants.expoConfig?.extra?.CLERK_PUBLISHABLE_KEY}
        tokenCache={tokenCache}
      >
        <TRPCProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </TRPCProvider>
      </ClerkProvider>
    );
  }
};
