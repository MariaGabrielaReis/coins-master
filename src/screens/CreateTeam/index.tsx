import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { YellowButton } from "@components/buttons";
import { Dropdown, TextInput } from "@components/inputs";
import { OptionProps } from "@components/inputs/InputProps";

export default function CreateTeam() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [teamCode, seTeamCode] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Selecione uma opção");

  const semesters: OptionProps[] = [
    { label: "1ºDSM", value: "1dsm" },
    { label: "2ºDSM", value: "2dsm" },
    { label: "3ºDSM", value: "3dsm" },
    { label: "4ºDSM", value: "4dsm" },
  ];

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
        value={value}
        setOpen={setOpen}
        setValue={setValue}
      />

      <YellowButton
        label={"CRIAR EQUIPE"}
        onClick={() => navigation.navigate("Login")}
      />
    </Container>
  );
}
