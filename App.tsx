import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import theme from "./src/global/styles/theme";
import { ThemeProvider } from "styled-components";
import { Navbar } from "@components/texts";
import Icon from "react-native-vector-icons/AntDesign";

import OnBoarding from "@screens/OnBoarding";
import TeamOptions from "@screens/TeamOptions";
import CreateTeam from "@screens/CreateTeam";
import Sorry from "@screens/Sorry";
import Login from "@screens/Login";
import AddCoins from "@screens/AddCoins";
import BlockCoinsDistribution from "@screens/BlockCoinsDistribution";
import DeleteTeam from "@screens/DeleteTeam";
import Home from "@screens/Home";

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
              headerRight: () => <Navbar>Cadastre sua equipe</Navbar>,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "",
              headerRight: () => <Navbar>Login</Navbar>,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Equipe",
              headerBackVisible: false,
              headerRight: () => (
                <Icon
                  name="setting"
                  size={24}
                  color={theme.colors.black}
                  // onPress={() => navigation.navigate("Home")}
                />
              ),
            }}
          />

          <Stack.Screen
            name="DeleteTeam"
            component={DeleteTeam}
            options={{
              title: "",
              headerRight: () => <Navbar>Deletar equipe</Navbar>,
            }}
          />

          <Stack.Screen
            name="AddCoins"
            component={AddCoins}
            options={{
              title: "",
              headerRight: () => <Navbar>Adição de moedas</Navbar>,
            }}
          />
          <Stack.Screen
            name="BlockCoinsDistribution"
            component={BlockCoinsDistribution}
            options={{
              title: "",
              headerRight: () => <Navbar>Distribuição de moedas</Navbar>,
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
