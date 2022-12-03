import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import {
  BlackButton,
  LabelButton,
  YellowButton,
  TextInput,
  Habilities,
} from "@components";

import { MainContext } from "@context";
import { updateTeam } from "@requests/TeamRequests";
import { Team } from "@interfaces/Team";
import { setMembers, setTeam } from "@reducer";
import { User } from "@interfaces/User";

export default function ConfigurateTeam() {
  const navigation = useNavigation();
  const {
    state: { team },
    dispatch,
  } = useContext(MainContext);

  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [abilities, setAbilities] = useState([
    team?.ability1 ?? "Proatividade",
    team?.ability2 ?? "Autonomia",
    team?.ability3 ?? "Colaboração",
    team?.ability4 ?? "Entrega de resultados",
    team?.ability5 ?? "Carisma",
  ]);

  function handleUpdate() {
    setIsLoading(true);
    updateTeam(
      team.name,
      name ?? team.name,
      team.classroom,
      abilities,
      navigation,
    ).then((response: { team: Team; members: User[] }) => {
      dispatch(setTeam(response.team));
      dispatch(setMembers(members));
      setIsLoading(false);
      navigation.navigate("Home");
    });
  }

  return (
    <Container>
      <TextInput
        label={"Nome"}
        placeholder={team.name}
        value={name}
        onChange={name => setName(name)}
      />
      <BlackButton
        label={"ADICIONAR MOEDAS"}
        isDisabled={isLoading}
        onClick={() => navigation.navigate("AddCoins")}
      />
      <LabelButton
        label={"ADICIONAR INTEGRANTE"}
        isDisabled={isLoading}
        onClick={() => navigation.navigate("AddMember")}
      />
      <Habilities
        defaultValue={abilities}
        handleOnChange={(abilities: string[]) => setAbilities(abilities)}
      />

      <YellowButton
        label={isLoading ? "Aguarde..." : "ATUALIZAR"}
        isDisabled={isLoading}
        onClick={handleUpdate}
      />
      <LabelButton
        label={"DELETAR EQUIPE"}
        isDisabled={isLoading}
        onClick={() => navigation.navigate("DeleteTeam")}
      />
    </Container>
  );
}
