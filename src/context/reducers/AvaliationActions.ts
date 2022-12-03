export enum ActionTypes {
  setCoins,
  setSprint,
  setAvaliation,
  createAvaliations,
}

export type SetAvaliationCoins = {
  type: ActionTypes.setCoins;
  payload: number;
};

export type SetSprint = {
  type: ActionTypes.setSprint;
  payload: number;
};

export type SetAvaliation = {
  type: ActionTypes.setAvaliation;
  payload: {
    cardIndex: number;
    abilityIndex: number;
    avaliationAction: "minus" | "plus";
  };
};

export type CreateAvaliations = {
  type: ActionTypes.createAvaliations;
  payload: [number[]];
};

export type AvaliationActions =
  | SetSprint
  | SetAvaliation
  | SetAvaliationCoins
  | CreateAvaliations;
