import React, { useRef } from "react";
import {
  Animated,
  TouchableWithoutFeedback,
  ViewStyle,
  StyleProp,
} from "react-native";

type AnimatedPressableProps = {
  children: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number; 
};

function PressAnimation({
  children,
  onPress,
  style,
  scaleTo = 0.97,
}: Readonly<AnimatedPressableProps>) {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: scaleTo,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 5,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
    >
      <Animated.View style={[{ transform: [{ scale: scaleValue }] }, style]}>
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default PressAnimation;
