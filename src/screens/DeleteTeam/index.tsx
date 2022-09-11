import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { Illustration } from "@components/illustrations";
import { BlackButton } from "@components/buttons";

export default function DeleteTeam() {
  const navigation = useNavigation();

  return (
    <Container>
      <Illustration
        source={require("@assets/images/delete-team-illustration.png")}
      />
      <Content>
        <Title>Essa ação é irreversível</Title>
        <Subtitle>Quer mesmo excluir a equipe? </Subtitle>
        <BlackButton
          label={"EXCLUIR"}
          onClick={() => navigation.navigate("TeamOptions")}
        />
      </Content>
    </Container>
  );
}
