import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { YellowButton, TextInput } from "@components";

import { createUser } from "@requests/UserRequests";
import { User } from "@interfaces/User";
import { MainContext } from "@context";
import { setMembers, setUser } from "@reducer";

export default function AddMember() {
  const {
    state: { team, members },
    dispatch,
  } = useContext(MainContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  function handleAddMember() {
    setIsLoading(true);
    createUser(name, team.name, "Dev Team", navigation).then((member: User) => {
      dispatch(setMembers([...members, member]));
      setIsLoading(false);
      navigation.navigate("ConfigurateTeam");
    });
  }

  return (
    <Container>
      <TextInput
        label={"Nome"}
        placeholder={"Exemplo: Maria Gabriela"}
        value={name}
        onChange={name => setName(name)}
      />
      <YellowButton
        label={isLoading ? "Aguarde..." : "CONTINUAR"}
        isDisabled={isLoading}
        onClick={handleAddMember}
      />
    </Container>
  );
}
