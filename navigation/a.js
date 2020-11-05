import {createStackNavigator, createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated';
import React from 'react';
import {
    Animated,
    Easing
} from 'react-native';

import Login   from "./Page/A";
import SignUp  from './Page/B';

//Slide from right animation
let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

//Transition configurations for createStackNavigator
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index } = scene
      return SlideFromRight(index, position, width);
    },
  }
}

const Navigate1 = createStackNavigator({
    A:         {screen:A},
    B:         {screen:B},
},
{
    headerMode: 'none', //No headers, like createAnimatedSwitchNavigator
    transitionConfig: TransitionConfiguration //Configure transitions here
})

export const AppContainer = createAppContainer(Navigate1);