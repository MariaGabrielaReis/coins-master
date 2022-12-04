import React, { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";

import { BlackButton, Card } from "@components";
import { Container } from "./styles";

import { showTeam } from "@requests/TeamRequests";
import { MainContext } from "@MainContext/index";
import { setMembers, setTeam } from "@MainContext/reducer";

export default function Home() {
  const {
    state: { team, members },
    dispatch,
  } = useContext(MainContext);
  const navigation = useNavigation();

  useEffect(() => {
    showTeam(team.name, navigation).then(response => {
      dispatch(setMembers(response.members));
      dispatch(setTeam(response.team));
    });
  }, []);

  return (
    <Container>
      {members ? (
        <FlatList
          data={members}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Card name={item.name} role={item.role} />}
        />
      ) : (
        <Text>Carregando dados da equipe...</Text>
      )}
      {team?.coins !== 0 && (
        <BlackButton
          label={"DISTRIBUIR MOEDAS"}
          onClick={() => navigation.navigate("CoinsDistribution")}
        />
      )}
    </Container>
  );
}
