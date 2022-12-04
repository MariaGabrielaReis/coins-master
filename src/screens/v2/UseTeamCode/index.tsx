import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { BlackButton, TextInput } from "@components";

import { showTeam } from "@requests/TeamRequests";
import { MainContext } from "@MainContext/index";
import { setMembers, setTeam } from "@MainContext/reducer";

export default function UseTeamCode() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [teamCode, seTeamCode] = useState("");

  function handleUseCode() {
    setIsLoading(true);
    showTeam(teamCode, navigation).then(response => {
      dispatch(setMembers(response.members));
      dispatch(setTeam(response.team));
      setIsLoading(false);
      navigation.navigate("Login");
    });
  }

  return (
    <Container>
      <TextInput
        label={"Código da equipe"}
        placeholder={"Exemplo: tbd2022"}
        supportText={"(obs.: apenas letras minúsculas e números)"}
        value={teamCode}
        onChange={teamCode => seTeamCode(teamCode)}
      />
      <BlackButton
        label={isLoading ? "Aguarde..." : "ENTRAR NA EQUIPE"}
        isDisabled={isLoading}
        onClick={handleUseCode}
      />
    </Container>
  );
}
