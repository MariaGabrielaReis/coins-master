import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";
import {
  Illustration,
  Title,
  Subtitle,
  BlackButton,
  YellowButton,
} from "@components";

export default function TeamOptions() {
  const navigation = useNavigation();

  return (
    <Container>
      <Illustration
        source={require("@assets/images/team-options-illustration.png")}
      />
      <Content>
        <Title>Entre ou crie equipes!</Title>
        <Subtitle>
          Crie seu time ou use o código para {"\n"} entrar em um
        </Subtitle>
        <BlackButton
          label={"CRIAR EQUIPE"}
          onClick={() => navigation.navigate("CreateTeam")}
        />
        <YellowButton
          isDisabled={true}
          label={"USAR CÓDIGO DE EQUIPE"}
          onClick={() => navigation.navigate("Sorry")}
        />
      </Content>
    </Container>
  );
}
