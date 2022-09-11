import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { Navbar } from "@components/texts";

import OnBoarding from "@screens/OnBoarding";
import TeamOptions from "@screens/TeamOptions";
import CreateTeam from "@screens/CreateTeam";
import Sorry from "@screens/Sorry";
import Login from "@screens/Login";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoarding"
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.colors.white,
            },
            headerTintColor: theme.colors.black,
          }}>
          <Stack.Screen
            name="OnBoarding"
            component={OnBoarding}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TeamOptions"
            component={TeamOptions}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CreateTeam"
            component={CreateTeam}
            options={{
              title: "",
              headerRight: () => (
                <Navbar style={{ marginRight: 8 }}>Cadastre sua equipe</Navbar>
              ),
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              headerRight: () => (
                <Navbar style={{ marginRight: 14 }}>Login</Navbar>
              ),
            }}
          />

          <Stack.Screen
            name="Sorry"
            component={Sorry}
            options={{ title: "" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
