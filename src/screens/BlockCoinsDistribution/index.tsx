import React from "react";

import { Container } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { Illustration } from "@components/illustrations";

export default function BlockCoinsDistribution() {
  return (
    <Container>
      <Illustration
        source={require("@assets/images/block-coins-distribution-illustration.png")}
        withoutMargin={true}
      />
      <Title>Ops! As moedas ainda {"\n"} não estão disponíveis</Title>
      <Subtitle>
        Espere a sprint acabar, vá em {"\n"} “Configurações do time” e adicione
        o {"\n"} total de moedas recebidas para {"\n"} desbloquear sua
        distribuição
      </Subtitle>
    </Container>
  );
}
