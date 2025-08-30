
import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing, Text } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

const colors = {
  border: "#EBEBEB",
  primary: "#AEDC81",
  primaryDark: "#6CC51D",
  primaryLight: "#EBFFD7"
};

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const SplashScreen = () => {
  const cartAnim = useRef(new Animated.Value(0)).current;
  const wheelAnim = useRef(new Animated.Value(0)).current;
  const textAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const cartAnimation = Animated.timing(cartAnim, {
      toValue: 1,
      duration: 1200,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    });

    const wheelAnimation = Animated.timing(wheelAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.out(Easing.bounce),
      useNativeDriver: true,
    });

    const textAnimation = Animated.timing(textAnim, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    });

    Animated.parallel([cartAnimation, wheelAnimation, textAnimation]).start();
  }, [cartAnim, wheelAnim, textAnim]);

  const cartTranslateY = cartAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const cartOpacity = cartAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.3, 1],
  });

  const textTranslateY = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.logoContainer, opacity: cartOpacity, transform: [{ translateY: cartTranslateY }]}}>
        <Svg width="150" height="150" viewBox="0 0 100 100">
          <AnimatedPath
            d="M10 20 H80 L70 60 H20 Z"
            fill={colors.primaryDark}
            stroke={colors.primaryDark}
            strokeWidth="4"
            strokeLinejoin="round"
            opacity={cartAnim}
          />
          <AnimatedCircle cx="30" cy="75" r="8" fill={colors.primary} opacity={wheelAnim} />
          <AnimatedCircle cx="60" cy="75" r="8" fill={colors.primary} opacity={wheelAnim} />
        </Svg>
      </Animated.View>
      <Animated.View style={{ opacity: textAnim, transform: [{ translateY: textTranslateY }] }}>
        <Text style={styles.text}>bigCart</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.primaryDark,
    marginTop: 20,
  },
});

export default SplashScreen;
