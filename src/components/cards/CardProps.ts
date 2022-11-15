export type CardProps = {
  name: string;
  role: string;
  photo?: string;
};

export type HabilitiesProps = {
  defaultValue: string[];
  handleOnChange: (habilities: string[]) => void;
};
