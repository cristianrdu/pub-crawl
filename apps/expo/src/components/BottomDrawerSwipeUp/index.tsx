import React, { useRef, useState } from "react";
import {
  Animated as RNAnimated,
  Dimensions,
  findNodeHandle,
  GestureResponderEvent,
  PanResponder,
  PanResponderGestureState,
  View,
} from "react-native";
import Animated, {
  withRepeat,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withDelay,
  FadeInDown,
  FadeOutUp,
} from "react-native-reanimated";
import { animateMove, getNextState } from "./service";

const { height } = Dimensions.get("window");
export enum DrawerState {
  Open = height - 230,
  Peek = 230,
  Closed = 0,
}

export const HorizontalLine = () => (
  <View className="mx-0 h-1 w-8 self-center rounded-full bg-stone-400" />
);

export const BottomDrawer: React.FunctionComponent<any> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { height } = Dimensions.get("window");
  /* Declare initial value of y. In this case, we want it to be closed when the component is closed */
  const y = React.useRef(new RNAnimated.Value(DrawerState.Closed)).current;
  /* Declare another variable to keep track of the state. We need a separate variable for this because y will also change whilst the user is in the process of moving the drawer up or down */
  let state = React.useRef(DrawerState.Closed).current;
  const [prevTrackedDrawerState, setPrevTrackedDrawerState] =
    useState<DrawerState>(DrawerState.Closed);
  const [trackedDrawerState, setTrackedDrawerState] = useState<DrawerState>(
    DrawerState.Closed,
  );
  const [isTextHidden, setIsTextHidden] = useState(false);
  const margin = 0.05 * height;
  const movementValue = (moveY: number) => height - moveY;

  /* This event is triggered when the animated view is moving. We want the user to be able to drag/swipe up or down and the drawer should move simultaneously. */
  const onPanResponderMove = (
    _: GestureResponderEvent,
    { moveY }: PanResponderGestureState,
  ) => {
    const val = movementValue(moveY);
    animateMove(y, val);
  };

  /* Here is where we snap the drawer to the desired state - open, peek or closed */
  const onPanResponderRelease = (
    _: GestureResponderEvent,
    { moveY }: PanResponderGestureState,
  ) => {
    const valueToMove = movementValue(moveY);
    setPrevTrackedDrawerState(state);
    const nextState = getNextState(state, valueToMove, margin);
    state = nextState;

    if (!isTextHidden) {
      setIsTextHidden(true);
    }
    setTrackedDrawerState(nextState);
    animateMove(y, nextState);
  };

  /* This determines if the responder should do something. In this scenario, it is set to true when the distance moved by Y is greater than or equal to 10, or lesser than or equal to -10. */
  const onMoveShouldSetPanResponder = (
    _: GestureResponderEvent,
    { dy }: PanResponderGestureState,
  ) => {
    return Math.abs(dy) >= 10;
  };

  /* Here we're creating a panResponder object and assigning th event handlers to it. */
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder,
      onStartShouldSetPanResponderCapture: onMoveShouldSetPanResponder,
      onPanResponderMove,
      onPanResponderRelease,
    }),
  ).current;

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withRepeat(
          withSequence(
            withTiming(-15),
            withDelay(1500, withTiming(0)),
            withTiming(-15),
          ),
          3,
        ),
      },
    ],
    opacity: withRepeat(
      withSequence(
        withDelay(1500, withTiming(0)),
        withDelay(300, withTiming(1)),
      ),
      3,
    ),
  }));

  return (
    <RNAnimated.View
      className="absolute w-full rounded-3xl bg-[#fafafa] shadow-md shadow-neutral-400"
      style={[
        {
          height: height,
          bottom: -height + 70,
          transform: [{ translateY: y }],
        },
      ]}
      {...panResponder.panHandlers}
    >
      <HorizontalLine />

      {!isTextHidden && (
        <Animated.Text
          exiting={FadeOutUp}
          style={[
            {
              marginTop: 25,
              color: "black",
              fontWeight: "600",
              alignSelf: "center",
              position: "absolute",
              letterSpacing: 0.5,
            },
            animatedStyles,
          ]}
        >
          Swipe up to open
        </Animated.Text>
      )}
      {React.cloneElement(children, {
        drawerState: trackedDrawerState,
        prevDrawerState: prevTrackedDrawerState,
        isTextHidden,
      })}
    </RNAnimated.View>
  );
};
