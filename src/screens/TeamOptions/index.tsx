import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { Illustration } from "@components/illustrations";
import { BlackButton, YellowButton } from "@components/buttons";

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
