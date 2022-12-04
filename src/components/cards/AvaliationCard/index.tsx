import React, { useContext } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  Content,
  Name,
  Role,
  AbilitiesContainer,
  Ability,
  AbilityName,
  AbilityValue,
  Feedback,
  FeedbackLabel,
} from "./styles";
import { MainContext } from "@MainContext/index";
import { AvaliationContext } from "@AvaliationContext/index";
import { setAvaliation } from "@AvaliationContext/reducer";

type AvaliationCardProps = {
  cardIndex: number;
};

export function AvaliationCard({ cardIndex }: AvaliationCardProps) {
  const {
    state: { members, team },
  } = useContext(MainContext);
  const {
    state: { avaliations, coinsLeft },
    avaliationDispatch,
  } = useContext(AvaliationContext);
  const abilities = [
    team?.ability1 ?? "Proatividade",
    team?.ability2 ?? "Autonomia",
    team?.ability3 ?? "Colaboração",
    team?.ability4 ?? "Entrega de resultados",
    team?.ability5 ?? "Carisma",
  ];

  return (
    <Container>
      <Content>
        <Name>{members[cardIndex].name}</Name>
        <Role>{members[cardIndex].role}</Role>
        <AbilitiesContainer>
          {abilities.map((ability, index) => {
            const abilitiesValue = avaliations[cardIndex] ?? [];
            const plusIsDisabled = abilitiesValue[index] === 3 ?? false;
            const minusIsDisabled = abilitiesValue[index] === 0 ?? false;

            return (
              <Ability>
                <Icon
                  name="minuscircleo"
                  size={20}
                  onPress={() =>
                    !minusIsDisabled &&
                    coinsLeft > 0 &&
                    avaliationDispatch(setAvaliation(cardIndex, index, "minus"))
                  }
                />
                <AbilityValue>{abilitiesValue[index]}</AbilityValue>
                <Icon
                  name="pluscircleo"
                  size={20}
                  onPress={() =>
                    !plusIsDisabled &&
                    coinsLeft > 0 &&
                    avaliationDispatch(setAvaliation(cardIndex, index, "plus"))
                  }
                />
                <AbilityName>{ability}</AbilityName>
              </Ability>
            );
          })}
        </AbilitiesContainer>
        <FeedbackLabel>Feedback:</FeedbackLabel>
        <Feedback />
      </Content>
    </Container>
  );
}
