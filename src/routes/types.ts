export type StartStackNavigatorParamList = {
  OnBoarding: undefined;
  TeamOptions: undefined;
  CreateTeam: undefined;
  Login: undefined;
  Sorry: undefined;
  Home: BottomTabNavigatorParamList;
};

export type HomeStackNavigatorParamList = {
  ConfigurateTeam: undefined;
  DeleteTeam: undefined;
  AddCoins: undefined;
  CoinsDistribution: undefined;
  BlockCoinsDistribution: undefined;
  Home: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  Profile: undefined;
  DeleteTeam: undefined;
};
