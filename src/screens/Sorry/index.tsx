import React from "react";

import { Container } from "./styles";
import { Illustration, Title, Subtitle } from "@components";

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
