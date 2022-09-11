import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { BlackButton, LabelButton, YellowButton } from "@components/buttons";
import { Dropdown, TextInput } from "@components/inputs";

import { members } from "@mocks/members";
import { OptionProps } from "@components/inputs/InputProps";

export default function ConfigurateTeam() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [teamCode, seTeamCode] = useState("");

  const [openScrumMasterDropdown, setOpenScrumMasterDropdown] = useState(false);
  const [scrumMaster, setScrumMaster] = useState("");

  const [openProductOwnerDropdown, setOpenProductOwnerDropdown] =
    useState(false);
  const [productOwner, setProductOwner] = useState("");

  let membersNames: OptionProps[] = [
    { label: "Selecione uma opção", value: "" },
  ];
  members.forEach(member => {
    membersNames.push({ label: member.name, value: member.name });
  });

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

      <BlackButton
        label={"ADICIONAR MOEDAS"}
        onClick={() => navigation.navigate("ConfigurateTeam")}
      />
      <YellowButton
        label={"ATUALIZAR"}
        onClick={() => navigation.navigate("ConfigurateTeam")}
      />
      <LabelButton
        label={"DELETAR EQUIPE"}
        onClick={() => navigation.navigate("DeleteTeam")}
      />
    </Container>
  );
}