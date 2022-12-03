import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { BlackButton, TextInput, Habilities } from "@components";

import { createTeam } from "@requests/TeamRequests";
import { MainContext } from "@context/index";
import { setTeam } from "@reducer/reducer";
import { Team } from "@interfaces/Team";

export default function CreateTeam() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [classroom, setClassroom] = useState("");

  const [abilities, setAbilities] = useState([
    "Proatividade",
    "Autonomia",
    "Colaboração",
    "Entrega de Resultados",
    "Resiliência",
  ]);

  function handleCreateTeam() {
    setIsLoading(true);
    createTeam(name, classroom, abilities, navigation).then((newTeam: Team) => {
      dispatch(setTeam(newTeam));
      setIsLoading(false);
      navigation.navigate("Login");
    });
  }

  return (
    <Container>
      <TextInput
        label={"Nome"}
        placeholder={"Exemplo: The Bugger Ducks"}
        value={name}
        onChange={name => setName(name)}
      />
      <TextInput
        label={"Turma"}
        placeholder={"Exemplo: 4º DSM"}
        value={classroom}
        onChange={classroom => setClassroom(classroom)}
      />
      <Habilities
        defaultValue={abilities}
        handleOnChange={(abilities: string[]) => setAbilities(abilities)}
      />
      <BlackButton
        label={isLoading ? "Aguarde..." : "CRIAR EQUIPE"}
        isDisabled={isLoading}
        onClick={handleCreateTeam}
      />
    </Container>
  );
}
