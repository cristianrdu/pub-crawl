import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { TRPCProvider } from "./utils/api";

import { HomeScreen } from "./screens/home";
import Navigation from "./navigation";
import useColorScheme from "./hooks/useColorScheme";
import useCachedResources from "./hooks/useCachedResources";

export const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <TRPCProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          {/* <HomeScreen /> */}
          <StatusBar />
        </SafeAreaProvider>
      </TRPCProvider>
    );
  }
};
