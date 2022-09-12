import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import StartStackNavigator from "./StartStack";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StartStackNavigator />
    </NavigationContainer>
  );
}
