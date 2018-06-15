import React, { Component } from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Routes from "./routes";

const HomeStack = createStackNavigator(Routes.HomeRoutes, {
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "white"
  }
});

const ProjectStack = createStackNavigator(Routes.ProjectsRoutes, {
  initialRouteName: "Projects"
});

const MoreStack = createStackNavigator(Routes.MoreRoutes, {
  initialRouteName: "More"
});

const bottomTabNavConfig = {
  tabBarOptions: {
    activeTintColor: "gray",
    style: {
      backgroundColor: "#000"
    }
  }
};

const MainScreenNavigator = createBottomTabNavigator(
  {
    Goal: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: <Ionicons name="ios-home" size={25} color="tomato" />
      }
    },
    Profit: {
      screen: ProjectStack,
      navigationOptions: {
        tabBarLabel: "Projects",
        tabBarIcon: <Ionicons name="ios-planet" size={25} color="tomato" />
      }
    },
    Contacts: {
      screen: MoreStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: <Ionicons name="ios-more" size={25} color="tomato" />
      }
    }
  },
  bottomTabNavConfig
);

export default class AppNavigation extends Component {
  render() {
    return <MainScreenNavigator />;
  }
}
