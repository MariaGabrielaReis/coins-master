import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "@global/styles/theme";
import { Navbar } from "@components";

import { StartStackNavigatorParamList } from "./types";
import OnBoarding from "@screens/OnBoarding";
import CreateTeam from "@screens/CreateTeam";
import Login from "@screens/Login";
import Sorry from "@screens/Sorry";
import HomeStackNavigator from "./HomeStack";

const StartStack = createNativeStackNavigator<StartStackNavigatorParamList>();

export default function StartStackNavigator() {
  return (
    <StartStack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTintColor: theme.colors.black,
      }}>
      <StartStack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      {/* <StartStack.Screen
        name="TeamOptions"
        component={TeamOptions}
        options={{ headerShown: false }}
      /> */}
      <StartStack.Screen
        name="CreateTeam"
        component={CreateTeam}
        options={{
          title: "",
          headerRight: () => <Navbar>Cadastre sua equipe</Navbar>,
        }}
      />
      {/* <StartStack.Screen
        name="UseTeamCode"
        component={UseTeamCode}
        options={{
          title: "",
          headerRight: () => <Navbar>Usar código de equipe</Navbar>,
        }}
      /> */}
      <StartStack.Screen
        name="Login"
        component={Login}
        options={{
          title: "",
          headerRight: () => <Navbar>Login</Navbar>,
        }}
      />
      <StartStack.Screen
        name="Sorry"
        component={Sorry}
        options={{ title: "" }}
      />
      <StartStack.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
    </StartStack.Navigator>
  );
}
