import React from "react";
import { createContext, Dispatch, useReducer } from "react";
import { AvaliationActions } from "./AvaliationActions";
import { avaliationReducer } from "./reducer";

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
  avaliationDispatch: Dispatch<AvaliationActions>;
}>({ state: INITIAL_STATE, avaliationDispatch: () => undefined });

type Props = {
  children: JSX.Element;
};

function AvaliationProvider({ children }: Props) {
  const [state, avaliationDispatch] = useReducer(
    avaliationReducer,
    INITIAL_STATE,
  );

  return (
    <AvaliationContext.Provider value={{ state, avaliationDispatch }}>
      {children}
    </AvaliationContext.Provider>
  );
}

export { AvaliationProvider, AvaliationContext };
