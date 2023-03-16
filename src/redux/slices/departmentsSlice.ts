import { createSlice, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import {
  getDepartments,
  getDepartmentsCities,
} from "../operations/departmentsOperations";
import { IDepartmentsSliceState } from "../../types/redux.types";
import { IDataFromApi } from "../../types/redux.types";

import { SelectValuesTypes } from "../../types/departments-components.types";

// Change type add fro pagination

const initialState: IDepartmentsSliceState = {
  // Data for departments
  departmentsData: {
    success: false,
    data: [],
    errors: [],
    translatedErrors: [],
    warnings: [],
    info: { totalCount: 0 },
    messageCodes: [],
    errorCodes: [],
    warningCodes: [],
    infoCodes: [],
  },

  // Data for citites
  citiesData: {
    success: false,
    data: [],
    errors: [],
    translatedErrors: [],
    warnings: [],
    info: { totalCount: 0 },
    messageCodes: [],
    errorCodes: [],
    warningCodes: [],
    infoCodes: [],
  },

  city: "",
  page: 1,
  departmentRef: "",
  departmentsSelectValue: {
    value: `Відділення`,
    label: `Відділення`,
  },

  // Common values
  loading: false,
  error: null,
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    // Set value for find department by Ref
    setFindDepartmentByRef(state, action: PayloadAction<string | undefined>) {
      state.departmentRef = action.payload;
    },

    // Set page value
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },

    // Set value for departments select
    setDepartmentsSelectValue(state, action: PayloadAction<SelectValuesTypes>) {
      state.departmentsSelectValue = action.payload;
    },

    // Set city for fetch data and pagination
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },

  extraReducers: (builder) => {
    // DEPARTMENTS
    builder.addCase(getDepartments.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getDepartments.fulfilled,
      (
        state,
        { payload }: PayloadAction<IDataFromApi<{ totalCount: number }>>
      ) => {
        state.departmentsData = payload;
        state.loading = false;
      }
    );

    // CITIES
    builder.addCase(getDepartmentsCities.pending, (state, _) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getDepartmentsCities.fulfilled,
      (
        state,
        { payload }: PayloadAction<IDataFromApi<{ totalCount: number }>>
      ) => {
        state.citiesData = payload;
        state.loading = false;
      }
    );
    builder.addMatcher(isError, (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.loading = false;
    });
  },
});

export const {
  setFindDepartmentByRef,
  setPage,
  setDepartmentsSelectValue,
  setCity,
} = departmentsSlice.actions;

export default departmentsSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith("rejected");
}
