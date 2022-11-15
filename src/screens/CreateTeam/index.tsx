import React, { useState, useContext } from "react";

import { Container } from "./styles";
import { YellowButton } from "@components/buttons";
import { Dropdown, TextInput } from "@components/inputs";
import { OptionProps } from "@components/inputs/InputProps";
import { Habilities } from "@components/cards";
import { createTeam } from "@requests/TeamRequests";
import { useNavigation } from "@react-navigation/native";
import { MainContext } from "@context";
import { setTeam } from "@reducer";
import { Team } from "@interfaces/Team";

export default function CreateTeam() {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [teamCode, seTeamCode] = useState("");

  const [open, setOpen] = useState(false);
  const [classroom, setClassroom] = useState("");

  const [abilities, setAbilities] = useState([
    "Proatividade",
    "Autonomia",
    "Colaboração",
    "Entrega de Resultados",
    "Resiliência",
  ]);

  const semesters: OptionProps[] = [
    { label: "Selecione uma opção", value: "" },
    { label: "1ºDSM", value: "1dsm" },
    { label: "2ºDSM", value: "2dsm" },
    { label: "3ºDSM", value: "3dsm" },
    { label: "4ºDSM", value: "4dsm" },
    { label: "5ºDSM", value: "5dsm" },
    { label: "6ºDSM", value: "6dsm" },
    { label: "1ºADS", value: "1ads" },
    { label: "2ºADS", value: "2ads" },
    { label: "3ºADS", value: "3ads" },
    { label: "4ºADS", value: "4ads" },
    { label: "5ºADS", value: "5ads" },
    { label: "6ºADS", value: "6ads" },
    { label: "1ºBD", value: "1bd" },
    { label: "2ºBD", value: "2bd" },
    { label: "3ºBD", value: "3bd" },
    { label: "4ºBD", value: "4bd" },
    { label: "5ºBD", value: "5bd" },
    { label: "6ºBD", value: "6bd" },
  ];

  function handleCreateTeam() {
    setIsLoading(true);
    createTeam(name, teamCode, "1dsm", abilities, navigation).then(
      (newTeam: Team) => {
        dispatch(setTeam(newTeam));
        setIsLoading(false);
        navigation.navigate("Login");
      },
    );
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
        label={"Código da equipe"}
        placeholder={"Exemplo: tbd2022"}
        supportText={"(obs.: apenas letras minúsculas e números)"}
        value={teamCode}
        onChange={teamCode => seTeamCode(teamCode)}
      />
      <Dropdown
        label={"Turma"}
        items={semesters}
        open={open}
        value={classroom}
        setOpen={setOpen}
        setValue={setClassroom}
        hasSmallSpacing={true}
      />
      <Habilities
        defaultValue={abilities}
        handleOnChange={(abilities: string[]) => setAbilities(abilities)}
      />
      <YellowButton
        label={isLoading ? "Aguarde..." : "CRIAR EQUIPE"}
        isDisabled={isLoading}
        onClick={handleCreateTeam}
      />
    </Container>
  );
}
