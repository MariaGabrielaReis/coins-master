import React from "react";

import { Container } from "./styles";
import { Title, Subtitle } from "@components/texts";

export default function Sorry() {
  return (
    <Container>
      <Title>Opa! Esse recurso ainda {"\n"} não tá disponível</Title>
      <Subtitle>
        Aguarde por novas versões do app {"\n"} para utilizar essa
        funcionalidade!
      </Subtitle>
    </Container>
  );
}
