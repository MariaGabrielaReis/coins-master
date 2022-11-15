import { Avaliation } from "./Avaliation";

export type User = {
  id?: string;
  name: string;
  photo: string;
  team_code: string;
  role: "Dev Team" | "Scrum Master" | "Product Owner";
  avaliatons?: Avaliation[];
};
