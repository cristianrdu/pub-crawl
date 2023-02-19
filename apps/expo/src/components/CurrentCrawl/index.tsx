import React from "react";
import { Image, View, Text } from "react-native";
import { DrawerState } from "../BottomDrawerSwipeUp";
import { CrawlClosed } from "./CrawlClosed";
import { CrawlHeader } from "./CrawlHeader";
import Animated, {
  FadeInUp,
  FadeInDown,
  FadeOutUp,
  FadeOutDown,
} from "react-native-reanimated";
import { CrawlList } from "./CrawlList";

const imageSrc = require("../../../assets/images/steve.jpeg");

type Props = {
  drawerState: DrawerState;
  prevDrawerState: DrawerState;
  isTextHidden: boolean;
};

export const CurrentCrawl = ({
  drawerState,
  isTextHidden,
  prevDrawerState,
}: Props) => {
  return (
    <View>
      {drawerState === DrawerState.Closed && isTextHidden && (
        <Animated.View
          entering={prevDrawerState < drawerState ? FadeInUp : undefined}
          exiting={prevDrawerState < drawerState ? FadeOutUp : undefined}
        >
          <CrawlClosed />
        </Animated.View>
      )}
      {(drawerState === DrawerState.Peek ||
        drawerState === DrawerState.Open) && (
        <Animated.View
          entering={prevDrawerState > drawerState ? undefined : FadeInDown}
          exiting={prevDrawerState > drawerState ? undefined : FadeOutDown}
        >
          <CrawlHeader
            crawlImage={undefined}
            crawlTitle={undefined}
            likes={undefined}
            locationCount={undefined}
            duration={undefined}
          />
        </Animated.View>
      )}
      {drawerState === DrawerState.Open && (
        <Animated.View
          entering={prevDrawerState > drawerState ? undefined : FadeInDown}
          exiting={prevDrawerState > drawerState ? undefined : FadeOutDown}
        >
          <CrawlList />
        </Animated.View>
      )}
    </View>
  );
};
