import { IGetTrackingStatusData, IState } from "../../types/redux.types";

export const trackingDataSelector = (
  state: IState
): IGetTrackingStatusData | null => state.trackingState.trackingData;

export const trackingLoadingSelector = (state: IState): boolean =>
  state.trackingState.loading;
