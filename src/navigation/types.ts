export type StartStackNavigatorParamList = {
  OnBoarding: undefined;
  TeamOptions: undefined;
  CreateTeam: undefined;
  Login: undefined;
  Sorry: undefined;
  Home: undefined;
};

export type HomeStackNavigatorParamList = {
  Home: undefined;
  ConfigurateTeam: undefined;
  DeleteTeam: undefined;
  AddCoins: undefined;
  CoinsDistribution: undefined;
  BlockCoinsDistribution: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  Profile: undefined;
  DeleteTeam: undefined;
};
