import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { getDepartmentsForCity } from "../operations/departmentsOperations";
import {
  IDepartmentsSliceState,
  IGetDepartmentsForCityData,
} from "../../types/redux.types";

const initialState: IDepartmentsSliceState = {
  departmentsForCityData: null,

  city: "",
  page: 1,

  loading: false,
  error: null,
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    // Set city for fetch data for this city with pagiantion
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },

    // Set page for fetch data for this city with pagiantion
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDepartmentsForCity.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getDepartmentsForCity.fulfilled,
      (state, { payload }: PayloadAction<IGetDepartmentsForCityData>) => {
        state.departmentsForCityData = payload;
        state.loading = false;
      }
    );

    builder.addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
      state.departmentsForCityData = null;
      state.error = payload;
      state.loading = false;
    });
  },
});

export const { setPage, setCity } = departmentsSlice.actions;

export default departmentsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
