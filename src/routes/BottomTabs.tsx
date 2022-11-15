import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { BottomTabNavigatorParamList } from "./types";
import HomeStackNavigator from "./HomeStack";
import Profile from "@screens/Profile";
import theme from "@global/styles/theme";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export default function BottomTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 56,
        },
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontWeight: "600",
          fontSize: 16,
        },
        tabBarIconStyle: { display: "none" },
        tabBarActiveBackgroundColor: theme.colors.yellow,
        tabBarActiveTintColor: theme.colors.black,
        tabBarInactiveTintColor: theme.colors.black,
        tabBarHideOnKeyboard: true,
      })}>
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Meu Perfil",
          headerShadowVisible: false,
          tabBarLabel: "Meu perfil",
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ route }) => ({
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";

            switch (routeName) {
              case "DeleteTeam":
                return { display: "none" };
              case "ConfigurateTeam":
                return { display: "none" };
              case "BlockCoinsDistribution":
                return { display: "none" };
              case "CoinsDistribution":
                return { display: "none" };
              default:
                return;
            }
          })(route),
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
}
