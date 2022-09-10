import React from "react";
import { InputProps } from "../InputProps";
import { Label, Input, SupportText } from "./styles";

export function TextInput({
  label,
  placeholder,
  supportText = "",
  isDisabled = false,
  keyboardType = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        isDisabled={isDisabled}
        keyboardType={keyboardType}
        hasSupportText={supportText?.length > 0}
      />
      {supportText?.length > 0 && <SupportText>{supportText}</SupportText>}
    </>
  );
}
