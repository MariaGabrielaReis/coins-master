import { Team } from "@interfaces/Team";
import { User } from "@interfaces/User";

export enum ActionTypes {
  setTeam,
  setUser,
  setMembers,
  setTeamCoins,
}

export type SetTeam = {
  type: ActionTypes.setTeam;
  payload: Team;
};

export type SetUser = {
  type: ActionTypes.setUser;
  payload: User;
};

export type SetMembers = {
  type: ActionTypes.setMembers;
  payload: User[];
};

export type SetTeamCoins = {
  type: ActionTypes.setTeamCoins;
  payload: number;
};

export type TeamActions = SetTeam | SetUser | SetMembers | SetTeamCoins;
