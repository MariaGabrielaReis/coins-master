import React from "react";

import { HabilitiesProps } from "../CardProps";
import {
  Container,
  HabilitiesContainer,
  InputContainer,
  Input,
} from "./styles";

import Icon from "react-native-vector-icons/AntDesign";
import { TopicTitle } from "@components";
import theme from "@global/styles/theme";

export function Habilities({ defaultValue, handleOnChange }: HabilitiesProps) {
  function handleInputChange(hability: string, index: number): void {
    handleOnChange({ ...defaultValue, [index]: hability });
  }

  return (
    <Container>
      <TopicTitle>Habilidades escolhidas</TopicTitle>
      <HabilitiesContainer>
        <InputContainer>
          <Icon name="edit" size={20} color={theme.colors.black} />
          <Input
            name={"hability1"}
            value={defaultValue[0]}
            onChangeText={(text: string) => handleInputChange(text, 0)}
          />
        </InputContainer>
        <InputContainer>
          <Icon name="edit" size={20} color={theme.colors.black} />
          <Input
            name={"hability2"}
            value={defaultValue[1]}
            onChangeText={(text: string) => handleInputChange(text, 1)}
          />
        </InputContainer>
        <InputContainer>
          <Icon name="edit" size={20} color={theme.colors.black} />
          <Input
            name={"hability3"}
            value={defaultValue[2]}
            onChangeText={(text: string) => handleInputChange(text, 2)}
          />
        </InputContainer>
        <InputContainer>
          <Icon name="edit" size={20} color={theme.colors.black} />
          <Input
            name={"hability4"}
            value={defaultValue[3]}
            onChangeText={(text: string) => handleInputChange(text, 3)}
          />
        </InputContainer>
        <InputContainer last={true}>
          <Icon name="edit" size={20} color={theme.colors.black} />
          <Input
            name={"hability5"}
            value={defaultValue[4]}
            onChangeText={(text: string) => handleInputChange(text, 44)}
          />
        </InputContainer>
      </HabilitiesContainer>
    </Container>
  );
}
