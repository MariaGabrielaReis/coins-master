import React from "react";
import { SelectProps } from "../InputProps";
import { Label, DropdownContainer } from "./styles";

export function Dropdown({
  label,
  isDisabled = false,
  items,
  open,
  value,
  setOpen,
  setValue,
  hasSmallSpacing = false,
}: SelectProps) {
  return (
    <>
      <Label>{label}</Label>
      <DropdownContainer
        open={open}
        value={value}
        items={items}
        setOpen={() => setOpen}
        setValue={() => setValue}
        isDisabled={isDisabled}
        hasSmallSpacing={hasSmallSpacing}
      />
    </>
  );
}
