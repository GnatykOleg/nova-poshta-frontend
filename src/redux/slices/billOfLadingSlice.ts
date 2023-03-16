import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBillOfLadingState } from "../../types/redux.types";
import storage from "redux-persist/lib/storage";

const initialState: IBillOfLadingState = {
  billOfLadingStory: [] as string[],
};

const billOfLadingSlice = createSlice({
  name: "billOfLading",
  initialState,
  reducers: {
    setTBillOfLadingStory(state, { payload }: PayloadAction<string>) {
      if (state.billOfLadingStory.includes(payload)) return;
      state.billOfLadingStory = [...state.billOfLadingStory, payload];
    },

    clearTBillOfLadingStory(state) {
      storage.removeItem("persist:billOfLading");
      state.billOfLadingStory = [];
    },

    deleteTBillOfLadingStory(state, { payload }: PayloadAction<string>) {
      const filteredArray = state.billOfLadingStory.filter(
        (el) => el !== payload
      );
      state.billOfLadingStory = filteredArray;
    },
  },
});

export const {
  setTBillOfLadingStory,
  clearTBillOfLadingStory,
  deleteTBillOfLadingStory,
} = billOfLadingSlice.actions;

export default billOfLadingSlice.reducer;
