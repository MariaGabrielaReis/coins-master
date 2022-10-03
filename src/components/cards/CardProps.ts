export type CardProps = {
  photo: string;
  name: string;
  role: string;
};

export type HabilitiesProps = {
  defaultValue: string[];
  handleOnChange: (habilities: string[]) => void;
};
