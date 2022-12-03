import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import {
  BlackButton,
  LabelButton,
  YellowButton,
  Habilities,
} from "@components";

import { MainContext } from "@context/index";

export default function ConfigurateTeam() {
  const navigation = useNavigation();
  const {
    state: { team },
  } = useContext(MainContext);

  const [abilities, setAbilities] = useState([
    team?.ability1 ?? "Proatividade",
    team?.ability2 ?? "Autonomia",
    team?.ability3 ?? "Colaboração",
    team?.ability4 ?? "Entrega de resultados",
    team?.ability5 ?? "Carisma",
  ]);

  return (
    <Container>
      <Habilities
        defaultValue={abilities}
        handleOnChange={(abilities: string[]) => setAbilities(abilities)}
      />
      <BlackButton
        label={"ADICIONAR MOEDAS"}
        onClick={() => navigation.navigate("AddCoins")}
      />
      <YellowButton
        label={"ADICIONAR INTEGRANTE"}
        onClick={() => navigation.navigate("AddMember")}
      />
      <LabelButton
        label={"DELETAR EQUIPE"}
        onClick={() => navigation.navigate("DeleteTeam")}
      />
    </Container>
  );
}
