import * as Icon from '@expo/vector-icons';
import React from 'react';
import {
  createBottomTabNavigator,
} from 'react-navigation-tabs';
// import {
//   NavigationContainer,
//   DefaultTheme,
//   getFocusedRouteNameFromRoute,
// } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MessagesScreen from '../screens/MessagesScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TopPicksScreen from '../screens/TopPicksScreen'
import {
  Animated,
  Easing
} from 'react-native';

// const HomeStacks = createAnimatedSwitchNavigator(
//   {
//     Home: HomeScreen,
//     TopPicks: TopPicksScreen,
//     Profile: ProfileScreen,
//     Messages: MessagesScreen,
//   },
//   {
//     // The previous screen will slide to the bottom while the next screen will fade in
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-bottom"
//           durationMs={400}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={500} />
//       </Transition.Together>
//     ),
//   }
// );
// Animated navigation

// THIS REMOVES THE HEADER BOTTOM BORDER FOR IOS AND ANDROID
const styles = {
  header: {
    borderBottomWidth: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },
};

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
      duration: 250,
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

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'flat',
      defaultNavigationOptions: {
        ...TransitionPresets.ScaleFromCenterAndroid
      },
  }
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      Icon={Icon.MaterialCommunityIcons}
      focused={focused}
      name="fire"
    />
  ),
}

const TopPicksStack = createStackNavigator(
  {
    TopPicks: TopPicksScreen,
  },
  {
    headerMode: 'flat',
  },
)

TopPicksStack.navigationOptions = {
  tabBarLabel: 'TopPicks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="diamond" />
  ),
}

const MessagesStack = createStackNavigator(
  {
    Messages: MessagesScreen,
  },
  {
    headerMode: 'flat',
  },
)

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.FontAwesome} focused={focused} name="commenting-o" />
  ),
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    headerMode: 'flat',
  },
)

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon Icon={Icon.Feather} focused={focused} name="user" />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  TopPicksStack,
  MessagesStack,
  ProfileStack,
})
