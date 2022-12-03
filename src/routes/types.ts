export type StartStackNavigatorParamList = {
  OnBoarding: undefined;
  // TeamOptions: undefined;
  CreateTeam: undefined;
  Login: undefined;
  Sorry: undefined;
  // UseTeamCode: undefined;
  Home: BottomTabNavigatorParamList;
};

export type HomeStackNavigatorParamList = {
  ConfigurateTeam: undefined;
  DeleteTeam: undefined;
  AddCoins: undefined;
  AddMember: undefined;
  CoinsDistribution: undefined;
  // BlockCoinsDistribution: undefined;
  Home: undefined;
};

export type BottomTabNavigatorParamList = {
  Home: HomeStackNavigatorParamList;
  Profile: undefined;
  DeleteTeam: undefined;
};
