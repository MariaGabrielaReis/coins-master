import React, { useState } from "react";

import { Container } from "./styles";
import { BlackButton } from "@components/buttons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "@components/inputs";

export default function Login() {
  const navigation = useNavigation();

  const [name, setName] = useState("");

  return (
    <Container>
      <TextInput
        label={"Nome"}
        placeholder={"Exemplo: Maria Gabriela"}
        value={name}
        onChange={name => setName(name)}
      />
      <BlackButton
        label={"CONTINUAR"}
        onClick={() => navigation.navigate("Login")}
      />
    </Container>
  );
}
