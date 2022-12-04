import { AvaliationContextProps } from "./";
import {
  ActionTypes,
  AvaliationActions,
  SetAvaliation,
  SetSprint,
  SetAvaliationCoins,
  CreateAvaliations,
} from "./AvaliationActions";

export function avaliationReducer(
  state: AvaliationContextProps,
  action: AvaliationActions,
): AvaliationContextProps {
  switch (action.type) {
    case ActionTypes.setCoins:
      return { ...state, coins: action.payload, coinsLeft: action.payload };
    case ActionTypes.setSprint:
      return { ...state, sprint: action.payload };
    case ActionTypes.createAvaliations:
      return { ...state, avaliations: action.payload };
    case ActionTypes.setAvaliation:
      const { cardIndex, abilityIndex, avaliationAction } = action.payload;
      let avaliationsUpdated = [...state.avaliations];
      let coinsOk = 0;

      console.log("antes: ", JSON.stringify(avaliationsUpdated));
      avaliationsUpdated = avaliationsUpdated.map((card, cardIndexMap) =>
        card.map((ability, abilityIndexMap) => {
          if (cardIndex === cardIndexMap && abilityIndexMap === abilityIndex) {
            ability = avaliationAction === "plus" ? ability + 1 : ability - 1;
          }
          coinsOk = coinsOk + ability;
          return ability;
        }),
      );

      console.log("depois: ", JSON.stringify(avaliationsUpdated));
      return {
        ...state,
        avaliations: avaliationsUpdated,
        coinsLeft: state.coins - coinsOk,
      };

    default:
      return state;
  }
}

// helper functions to simplify the caller
export const setAvaliationCoins = (coins: number): SetAvaliationCoins => ({
  type: ActionTypes.setCoins,
  payload: coins,
});

export const setSprint = (sprint: number): SetSprint => ({
  type: ActionTypes.setSprint,
  payload: sprint,
});

export const setAvaliation = (
  card: number,
  ability: number,
  avaliationAction: "minus" | "plus",
): SetAvaliation => ({
  type: ActionTypes.setAvaliation,
  payload: {
    cardIndex: card,
    abilityIndex: ability,
    avaliationAction: avaliationAction,
  },
});

export const createAvaliations = (
  avaliations: [number[]],
): CreateAvaliations => ({
  type: ActionTypes.createAvaliations,
  payload: avaliations,
});
