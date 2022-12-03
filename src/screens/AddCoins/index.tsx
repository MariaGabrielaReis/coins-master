import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

import { Container } from "./styles";
import { YellowButton, TextInput } from "@components";
import { MainContext } from "@context";
import { setTeamCoins } from "@reducer";

export default function AddCoins() {
  const { state, dispatch } = useContext(MainContext);
  const navigation = useNavigation();

  const [coins, setCoins] = useState(0);

  return (
    <Container>
      <TextInput
        label={"Quantas moedas conquistadas nessa sprint?"}
        placeholder={"Exemplo: 21"}
        value={coins.toString()}
        onChange={coins => setCoins(Number(coins))}
        keyboardType={"numeric"}
      />
      <YellowButton
        label={"CONTINUAR"}
        onClick={() => {
          dispatch(setTeamCoins(coins));
          navigation.navigate("Home");
        }}
      />
    </Container>
  );
}
