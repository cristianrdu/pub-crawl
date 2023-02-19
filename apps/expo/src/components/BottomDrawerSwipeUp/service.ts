import { Animated, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
export enum DrawerState {
  Open = height - 230,
  Peek = 230,
  Closed = 0,
}

export const animateMove = (
  y: Animated.Value,
  toValue: number | Animated.Value,
  callback?: any,
) => {
  Animated.spring(y, {
    toValue: -toValue,
    tension: 20,
    useNativeDriver: false,
  }).start((finished) => {
    /* Optional: But the purpose is to call this after the the animation has finished. Eg. Fire an event that will be listened to by the parent component */
    finished && callback && callback();
  });
};

export const getNextState = (
  currentState: any,
  val: number,
  margin: number,
): DrawerState => {
  switch (currentState) {
    case DrawerState.Peek:
      return val >= currentState + margin
        ? DrawerState.Open
        : val <= DrawerState.Peek - margin
        ? DrawerState.Closed
        : DrawerState.Peek;
    case DrawerState.Open:
      return val >= currentState
        ? DrawerState.Open
        : val <= DrawerState.Peek
        ? DrawerState.Closed
        : DrawerState.Peek;
    case DrawerState.Closed:
      return val >= currentState + margin
        ? val <= DrawerState.Peek + margin
          ? DrawerState.Peek
          : DrawerState.Open
        : DrawerState.Closed;
    default:
      return DrawerState.Open;
  }
};
