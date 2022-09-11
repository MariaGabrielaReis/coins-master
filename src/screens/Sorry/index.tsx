import React from "react";

import { Container } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { Illustration } from "@components/illustrations";

export default function Sorry() {
  return (
    <Container>
      <Illustration
        source={require("@assets/images/sorry-illustration.png")}
        withoutMargin={true}
      />
      <Title>Opa! Esse recurso ainda {"\n"} não tá disponível</Title>
      <Subtitle>
        Aguarde por novas versões do app {"\n"} para utilizar essa
        funcionalidade!
      </Subtitle>
    </Container>
  );
}
