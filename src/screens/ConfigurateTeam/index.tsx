import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import {
  BlackButton,
  LabelButton,
  YellowButton,
  Dropdown,
  TextInput,
  Habilities,
  OptionProps,
} from "@components";

import { MainContext } from "@context";
import { updateTeam } from "@requests/TeamRequests";
import { Team } from "@interfaces/Team";
import { setTeam } from "@reducer";

export default function ConfigurateTeam() {
  const navigation = useNavigation();
  const {
    state: { team, members },
    dispatch,
  } = useContext(MainContext);

  const [name, setName] = useState("");
  const [teamCode, seTeamCode] = useState("");
  const [openScrumMasterDropdown, setOpenScrumMasterDropdown] = useState(false);
  const [scrumMaster, setScrumMaster] = useState("");
  const [openProductOwnerDropdown, setOpenProductOwnerDropdown] =
    useState(false);
  const [productOwner, setProductOwner] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let membersNames: OptionProps[] = [
    { label: "Selecione uma opção", value: "" },
  ];
  members.forEach(member => {
    membersNames.push({ label: member.name, value: member.name });
  });

  const [abilities, setAbilities] = useState([
    "Proatividade",
    "Autonomia",
    "Colaboração",
    "Entrega de Resultados",
    "Resiliência",
  ]);

  function handleUpdate() {
    setIsLoading(true);
    updateTeam(
      team.code,
      teamCode,
      name,
      "1dsm",
      abilities,
      team.coins,
      navigation,
    ).then((team: Team) => {
      dispatch(setTeam(team));
      setIsLoading(false);
      navigation.navigate("Home");
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
      <Dropdown
        label={"Scrum Master"}
        items={membersNames}
        open={openScrumMasterDropdown}
        value={scrumMaster}
        setOpen={setOpenScrumMasterDropdown}
        setValue={setScrumMaster}
        hasSmallSpacing={true}
      />
      <Dropdown
        label={"Product Owner"}
        items={membersNames}
        open={openProductOwnerDropdown}
        value={productOwner}
        setOpen={setOpenProductOwnerDropdown}
        setValue={setProductOwner}
        hasSmallSpacing={true}
      />
      <TextInput
        label={"Código da equipe"}
        placeholder={"Exemplo: tbd2022"}
        value={teamCode}
        onChange={teamCode => seTeamCode(teamCode)}
      />

      <Habilities
        defaultValue={abilities}
        handleOnChange={(abilities: string[]) => setAbilities(abilities)}
      />

      <BlackButton
        label={"ADICIONAR MOEDAS"}
        isDisabled={isLoading}
        onClick={() => navigation.navigate("AddCoins")}
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
