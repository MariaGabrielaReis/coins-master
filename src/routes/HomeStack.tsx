import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Icon from "react-native-vector-icons/AntDesign";
import theme from "@global/styles/theme";
import { Navbar } from "@components/texts";

import { HomeStackNavigatorParamList } from "./types";
import Home from "@screens/Home";
import ConfigurateTeam from "@screens/ConfigurateTeam";
import DeleteTeam from "@screens/DeleteTeam";
import AddCoins from "@screens/AddCoins";
import BlockCoinsDistribution from "@screens/BlockCoinsDistribution";
import CoinsDistribution from "@screens/CoinsDistribution";

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function HomeStackNavigator() {
  const navigation = useNavigation();

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTintColor: theme.colors.black,
      }}>
      <HomeStack.Screen
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
              onPress={() => navigation.navigate("ConfigurateTeam")}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="DeleteTeam"
        component={DeleteTeam}
        options={{
          title: "",
          headerRight: () => <Navbar>Deletar equipe</Navbar>,
        }}
      />
      <HomeStack.Screen
        name="ConfigurateTeam"
        component={ConfigurateTeam}
        options={{
          title: "",
          headerRight: () => <Navbar>Configurações de equipe</Navbar>,
        }}
      />
      <HomeStack.Screen
        name="AddCoins"
        component={AddCoins}
        options={{
          title: "",
          headerRight: () => <Navbar>Adição de moedas</Navbar>,
        }}
      />
      <HomeStack.Screen
        name="CoinsDistribution"
        component={CoinsDistribution}
        options={{
          title: "",
          headerRight: () => <Navbar>Distribuição de moedas</Navbar>,
        }}
      />
      <HomeStack.Screen
        name="BlockCoinsDistribution"
        component={BlockCoinsDistribution}
        options={{
          title: "",
          headerRight: () => <Navbar>Distribuição de moedas</Navbar>,
        }}
      />
    </HomeStack.Navigator>
  );
}
