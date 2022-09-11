import React, { useState } from "react";

import { Container, Content } from "./styles";
import { BlackButton, YellowButton } from "@components/buttons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "@components/inputs";

export default function Profile() {
  const navigation = useNavigation();

  const [name, setName] = useState("Maria Gabriela");
  const [teamCode, setTeamCode] = useState("tbd2022");

  return (
    <Container>
      <TextInput
        label={"Nome"}
        placeholder={name}
        value={name}
        onChange={name => setName(name)}
      />
      <TextInput
        label={"Função atual"}
        value={"Scrum Master"}
        isDisabled={true}
      />
      <Content>
        <TextInput
          label={"Código da equipe"}
          value={teamCode}
          isDisabled={true}
          hasMarginRight={true}
        />
        <YellowButton
          label={"SAIR"}
          onClick={() => navigation.navigate("TeamOptions")}
          hasMarginBottom={true}
        />
      </Content>

      <BlackButton
        label={"ATUALIZAR"}
        onClick={() => navigation.navigate("Home")}
      />
    </Container>
  );
}
