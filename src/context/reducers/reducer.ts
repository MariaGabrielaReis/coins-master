import { Team } from "@interfaces/Team";
import { User } from "@interfaces/User";
import { ContextProps } from "../";
import {
  ActionTypes,
  TeamActions,
  SetTeam,
  SetUser,
  SetMembers,
} from "./TeamActions";

export function reducer(
  state: ContextProps,
  action: TeamActions,
): ContextProps {
  switch (action.type) {
    case ActionTypes.setTeam:
      return { ...state, team: action.payload };
    case ActionTypes.setUser:
      return { ...state, user: action.payload };
    case ActionTypes.setMembers:
      return { ...state, members: action.payload };

    default:
      return state;
  }
}

// helper functions to simplify the caller
export const setTeam = (team: Team): SetTeam => ({
  type: ActionTypes.setTeam,
  payload: team,
});

export const setUser = (user: User): SetUser => ({
  type: ActionTypes.setUser,
  payload: user,
});

export const setMembers = (members: User[]): SetMembers => ({
  type: ActionTypes.setMembers,
  payload: members,
});
