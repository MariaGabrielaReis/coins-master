import React from "react";
import { ButtonProps } from "../ButtonProps";
import { Container, Label } from "./styles";

export function YellowButton({
  label,
  hasMarginBottom,
  isDisabled,
  onClick,
}: ButtonProps) {
  return (
    <Container
      isDisabled={isDisabled}
      onPress={onClick}
      activeOpacity={0.8}
      hasMarginBottom={hasMarginBottom}>
      <Label isDisabled={isDisabled}>{label.toUpperCase()}</Label>
    </Container>
  );
}
