import React, { useState } from "react";

import { Container } from "./styles";
import { YellowButton } from "@components/buttons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "@components/inputs";

export default function AddCoins() {
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
        onClick={() => navigation.navigate("Home")}
      />
    </Container>
  );
}
