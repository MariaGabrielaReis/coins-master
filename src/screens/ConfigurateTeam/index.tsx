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
import { setMembers, setTeam } from "@reducer";
import { User } from "@interfaces/User";

export default function ConfigurateTeam() {
  const navigation = useNavigation();
  const {
    state: { team, members },
    dispatch,
  } = useContext(MainContext);

  const [name, setName] = useState("");
  const [teamCode, seTeamCode] = useState("");
  const [openScrumMasterDropdown, setOpenScrumMasterDropdown] = useState(false);
  const [scrumMaster, setScrumMaster] = useState<User>();
  const [openProductOwnerDropdown, setOpenProductOwnerDropdown] =
    useState(false);
  const [productOwner, setProductOwner] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  let membersNames: OptionProps[] = [];
  members.forEach(member => {
    member.role === "Scrum Master" && setScrumMaster(member);
    member.role === "Product Owner" && setProductOwner(member);
    membersNames.push({ label: member.name, value: member.name });
  });

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
      team.code,
      teamCode ?? team.code,
      name ?? team.name,
      "5dsm" ?? team.classroom,
      abilities,
      team.coins,
      scrumMaster,
      productOwner,
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
