import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITrackingNumbersStoryState } from "../../types/redux.types";
import storage from "redux-persist/lib/storage";

const initialState: ITrackingNumbersStoryState = {
  trackingNumbersStory: [] as string[],
};

const trackingNumbersSlice = createSlice({
  name: "trackingNumbers",
  initialState,
  reducers: {
    setTrackingNumberToStory(state, { payload }: PayloadAction<string>) {
      if (state.trackingNumbersStory.includes(payload)) return;
      state.trackingNumbersStory = [...state.trackingNumbersStory, payload];
    },

    clearTrackingNumbersStory(state) {
      storage.removeItem("persist:trackingNumbers");
      state.trackingNumbersStory = [];
    },

    deleteTrackingNumberFromPersist(state, { payload }: PayloadAction<string>) {
      const filteredArray = state.trackingNumbersStory.filter(
        (trackingNumber) => trackingNumber !== payload
      );
      state.trackingNumbersStory = filteredArray;
    },
  },
});

export const {
  setTrackingNumberToStory,
  clearTrackingNumbersStory,
  deleteTrackingNumberFromPersist,
} = trackingNumbersSlice.actions;

export default trackingNumbersSlice.reducer;
