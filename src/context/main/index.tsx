import React from "react";
import { Team } from "@interfaces/Team";
import { User } from "@interfaces/User";
import { createContext, Dispatch, useReducer } from "react";
import { reducer } from "./reducer";
import { TeamActions } from "./TeamActions";

export type ContextProps = {
  team: Team | undefined;
  user: User | undefined;
  members: User[] | undefined;
};

export const INITIAL_STATE: ContextProps = {
  team: undefined,
  user: undefined,
  members: undefined,
};

const MainContext = createContext<{
  state: ContextProps;
  dispatch: Dispatch<TeamActions>;
}>({ state: INITIAL_STATE, dispatch: () => undefined });

type Props = {
  children: JSX.Element;
};

function MainProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}

export { MainProvider, MainContext };
