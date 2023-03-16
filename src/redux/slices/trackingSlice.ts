import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { getTrackingStatus } from "../operations/trackingOperations";
import { ITrackingSliceState, IDataFromApi } from "../../types/redux.types";

const initialState: ITrackingSliceState = {
  trackingData: {
    success: false,
    data: [],
    errors: [],
    translatedErrors: [],
    warnings: [],
    info: [],
    messageCodes: [],
    errorCodes: [],
    warningCodes: [],
    infoCodes: [],
  },
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
      (state, { payload }: PayloadAction<IDataFromApi<[]>>) => {
        state.trackingData = payload;
        state.loading = false;
      }
    );

    builder.addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export default trackingSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
