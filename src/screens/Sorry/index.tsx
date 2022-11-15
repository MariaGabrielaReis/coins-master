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
      <Title>Ops! Houve algum problema</Title>
      <Subtitle>Tente novamente mais tarde!</Subtitle>
    </Container>
  );
}
