import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

import theme from "@global/styles/theme";
import { Container, StartButton } from "./styles";
import { Illustration, Title, Subtitle } from "@components";

export default function OnBoarding() {
  const navigation = useNavigation();

  return (
    <Container>
      <Illustration
        source={require("@assets/images/onboarding-illustration.png")}
      />
      <Title>Uma forma fácil de {"\n"} distribuir moedas do API</Title>
      <Subtitle>
        Avalie e dê feedbacks de maneira {"\n"} simples e rápida
      </Subtitle>
      <StartButton>
        <Icon
          name="arrowright"
          size={32}
          color={theme.colors.black}
          onPress={() => navigation.navigate("CreateTeam")}
        />
      </StartButton>
    </Container>
  );
}
