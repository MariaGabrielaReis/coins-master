import React from "react";
import { ButtonProps } from "../ButtonProps";
import { Container, Label } from "./styles";

export function YellowButton({ label, isDisabled, onClick }: ButtonProps) {
  return (
    <Container isDisabled={isDisabled} onPress={onClick}>
      <Label isDisabled={isDisabled}>{label.toUpperCase()}</Label>
    </Container>
  );
}
