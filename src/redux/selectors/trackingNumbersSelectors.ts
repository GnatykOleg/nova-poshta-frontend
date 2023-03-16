import { IState } from "../../types/redux.types";

export const trackingNumbersDataSelector = (state: IState): [] | string[] =>
  state.trackingNumbersState.trackingNumbersStory;
