export type InputProps = {
  label: string;
  placeholder: string;
  supportText?: string;
  isDisabled?: boolean;
  keyboardType?: "numeric" | "text";
  value: string;
  onChange: (value: string) => void;
};

export type SelectProps = {
  label: string;
  items: OptionProps[];
  isDisabled?: boolean;
  open: boolean;
  value: string;
  setOpen: (value: boolean) => void;
  setValue: (value: string) => void;
};

export type OptionProps = {
  label: string;
  value: string;
};
