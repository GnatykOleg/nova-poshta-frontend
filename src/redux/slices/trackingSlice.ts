import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { getTrackingStatus } from "../operations/trackingOperations";
import {
  ITrackingSliceState,
  IGetTrackingStatusData,
} from "../../types/redux.types";

const initialState: ITrackingSliceState = {
  trackingData: null,
  loading: false,
  error: null,
};

const trackingSlice = createSlice({
  name: "tracking",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTrackingStatus.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getTrackingStatus.fulfilled,
      (state, { payload }: PayloadAction<IGetTrackingStatusData>) => {
        state.trackingData = payload;
        state.loading = false;
      }
    );

    builder.addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.trackingData = null;
      state.loading = false;
    });
  },
});

export default trackingSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
