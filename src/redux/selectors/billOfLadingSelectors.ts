import { IState } from "../../types/redux.types";

export const billOfLadingDataSelector = (state: IState): [] | string[] =>
  state.billOfLadingState.billOfLadingStory;
