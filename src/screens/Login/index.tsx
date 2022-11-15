import React, { useState, useContext } from "react";

import { Container } from "./styles";
import { BlackButton } from "@components/buttons";
import { TextInput } from "@components/inputs";
import { createUser } from "@requests/UserRequests";
import { User } from "@interfaces/User";
import { MainContext } from "@context";
import { setUser } from "@reducer";
import { useNavigation } from "@react-navigation/native";

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
      setIsLoading(false);
      dispatch(setUser(user));
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
