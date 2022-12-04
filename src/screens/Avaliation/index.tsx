import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";

import { BlackButton, AvaliationCard } from "@components";
import { Container, CoinsCount, Coins } from "./styles";

import { MainContext } from "../../context/main/index";
import { AvaliationContext } from "@AvaliationContext/index";
import {
  createAvaliations,
  setAvaliationCoins,
  setSprint,
} from "@AvaliationContext/reducer";
import { setTeamCoins } from "@MainContext/reducer";

export default function Avaliation() {
  const {
    state: { team, members },
    dispatch,
  } = useContext(MainContext);
  const {
    state: { coinsLeft },
    avaliationDispatch,
  } = useContext(AvaliationContext);
  const navigation = useNavigation();

  function organizeAvaliations() {
    let membersAvaliation: [number[]] = [[0, 0, 0, 0, 0]];
    members.map(
      (_, index) => index !== 0 && membersAvaliation.push([0, 0, 0, 0, 0]),
    );
    console.log("avaliacoes: ", JSON.stringify(membersAvaliation));
    dispatch(createAvaliations(membersAvaliation));
  }

  function handleAvaliate() {
    organizeAvaliations();
    dispatch(setTeamCoins(0));
    avaliationDispatch(setAvaliationCoins(0));
    navigation.navigate("Home");
  }

  useEffect(() => {
    avaliationDispatch(setAvaliationCoins(team.coins));
    avaliationDispatch(setSprint(4));
    organizeAvaliations();
  }, []);

  return (
    <Container>
      <CoinsCount>
        Total de moedas disponíveis: <Coins>{team.coins}</Coins> {"\n"}
        Restam: <Coins>{coinsLeft}</Coins>
      </CoinsCount>
      {members ? (
        <FlatList
          data={members}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => <AvaliationCard cardIndex={index} />}
        />
      ) : (
        <Text>Carregando dados da equipe...</Text>
      )}
      <BlackButton
        label={"FINALIZAR AVALIAÇÃO"}
        isDisabled={coinsLeft === 0}
        onClick={handleAvaliate}
      />
    </Container>
  );
}
