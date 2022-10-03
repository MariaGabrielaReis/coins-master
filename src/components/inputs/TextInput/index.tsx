import React from "react";
import { InputProps } from "../InputProps";
import { Label } from "@components/texts";
import { Container, Input, SupportText } from "./styles";

export function TextInput({
  label,
  placeholder,
  supportText = "",
  isDisabled = false,
  keyboardType = "text",
  value,
  onChange,
  hasMarginRight = false,
}: InputProps) {
  return (
    <Container hasMarginRight={hasMarginRight}>
      <Label>{label}</Label>
      <Input
        name={label}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        keyboardType={keyboardType}
        hasSupportText={supportText?.length > 0}
      />
      {supportText?.length > 0 && <SupportText>{supportText}</SupportText>}
    </Container>
  );
}
