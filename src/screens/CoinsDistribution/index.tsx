import React from "react";
import { useNavigation } from "@react-navigation/native";

import { ButtonsContainer, Container, Content } from "./styles";
import { Title, Subtitle } from "@components/texts";
import { BlackButton, YellowButton } from "@components/buttons";

export default function CoinsDistribution() {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <Title>Você tem duas opções</Title>
        <Subtitle>
          Avaliar em grupo significa se reunir em time e distribuir o total de
          moedas entre a galera, já avaliar em anônimo, cada um distribui suas
          moedas livremente e ao final das votações é gerada uma média geral
          individual
        </Subtitle>

        <ButtonsContainer>
          <BlackButton
            label={"AVALIAÇÃO EM GRUPO"}
            onClick={() => navigation.navigate("BlockCoinsDistribution")}
          />
          <YellowButton
            isDisabled={true}
            label={"AVALIAÇÃO ANÔNIMA"}
            onClick={() => navigation.navigate("Sorry")}
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
}
