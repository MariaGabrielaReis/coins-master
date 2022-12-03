import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonsContainer, Container, Content } from "./styles";
import { Title, Subtitle, YellowButton } from "@components";

export default function CoinsDistribution() {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Opa, calma lá...</Title>
        <Subtitle>
          A avaliação só pode ser enviada uma {"\n"} vez por sprint, então o
          ideal é juntar {"\n"} a galera toda pra isso funcionar!
        </Subtitle>

        <ButtonsContainer>
          <YellowButton
            label={"ESTAMOS PRONTOS!"}
            onClick={() => navigation.navigate("Avaliation")}
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
