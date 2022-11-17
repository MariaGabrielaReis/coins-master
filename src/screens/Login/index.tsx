import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { BlackButton, TextInput } from "@components";

import { createUser } from "@requests/UserRequests";
import { User } from "@interfaces/User";
import { MainContext } from "@context";
import { setUser } from "@reducer";

export default function Login() {
  const {
    state: { team },
    dispatch,
  } = useContext(MainContext);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  function handleLogin() {
    setIsLoading(true);
    createUser(name, team.code, "Dev Team", navigation).then((user: User) => {
      dispatch(setUser(user));
      setIsLoading(false);
      navigation.navigate("Home");
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
      <BlackButton
        label={isLoading ? "Aguarde..." : "CRIAR CONTINUAR"}
        isDisabled={isLoading}
        onClick={handleLogin}
      />
    </Container>
  );
}
