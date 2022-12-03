import React from "react";
import { createContext, Dispatch, useReducer } from "react";
import { AvaliationActions } from "./reducers/AvaliationActions";
import { avaliationReducer } from "./reducers/avaliationReducer";

type Avaliation = number[];

export type AvaliationContextProps = {
  coins: number;
  sprint: number;
  avaliations: Avaliation[];
  coinsLeft: number;
};

export const INITIAL_STATE: AvaliationContextProps = {
  coins: 0,
  sprint: 0,
  avaliations: [],
  coinsLeft: 0,
};

const AvaliationContext = createContext<{
  state: AvaliationContextProps;
  dispatch: Dispatch<AvaliationActions>;
}>({ state: INITIAL_STATE, dispatch: () => undefined });

type Props = {
  children: JSX.Element;
};

function AvaliationProvider({ children }: Props) {
  const [state, dispatch] = useReducer(avaliationReducer, INITIAL_STATE);

  return (
    <AvaliationContext.Provider value={{ state, dispatch }}>
      {children}
    </AvaliationContext.Provider>
  );
}

export { AvaliationProvider, AvaliationContext };
