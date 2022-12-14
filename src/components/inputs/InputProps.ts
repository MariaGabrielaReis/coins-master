import { User } from "@interfaces/User";

export type InputProps = {
  label: string;
  placeholder?: string;
  supportText?: string;
  isDisabled?: boolean;
  keyboardType?: "numeric" | "text";
  value: string;
  onChange?: (value: string) => void;
  hasMarginRight?: boolean;
};

export type SelectProps = {
  label: string;
  items: OptionProps[];
  isDisabled?: boolean;
  open: boolean;
  value: User;
  setOpen: (value: boolean) => void;
  setValue: (value: User) => void;
  hasSmallSpacing?: boolean;
};

export type OptionProps = {
  label: string;
  value: string;
};
