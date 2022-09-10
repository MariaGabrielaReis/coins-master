import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";

import OnBoarding from "@screens/OnBoarding";
import TeamOptions from "@screens/TeamOptions";
import CreateTeam from "@screens/CreateTeam";
import Sorry from "@screens/Sorry";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="OnBoarding">
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="TeamOptions" component={TeamOptions} />
          <Stack.Screen name="CreateTeam" component={CreateTeam} />

          <Stack.Screen name="Sorry" component={Sorry} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
