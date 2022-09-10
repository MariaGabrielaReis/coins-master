import React from "react";
import Icon from "react-native-vector-icons/AntDesign";

import { Container, StartButton } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { Illustration } from "@components/illustrations";

export default function OnBoarding() {
  return (
    <Container>
      <Illustration source={require("@assets/onboarding-illustration.png")} />
      <Title>Uma forma fácil de {"\n"} distribuir moedas do API</Title>
      <Subtitle>
        Agora você pode avaliar e ser {"\n"} avaliado de maneira simples e
        rápida
      </Subtitle>
      <StartButton>
        <Icon
          name="arrowright"
          size={32}
          color={"#000"}
          onPress={() => console.log("foi")}
        />
      </StartButton>
    </Container>
  );
}
