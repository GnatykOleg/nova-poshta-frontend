import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataFromApi } from "../../types/redux.types";

import {
  departmentsServiceApi,
  departmentsCitiesServiceApi,
} from "../../services/api/departmentsServiceApi";

import { toast } from "react-toastify";

export const getDepartmentsCities = createAsyncThunk<
  IDataFromApi<{ totalCount: number }>,
  undefined,
  { rejectValue: string }
>("cities", async (_, { rejectWithValue }) => {
  try {
    const { data } = await departmentsCitiesServiceApi();
    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});

export const getDepartments = createAsyncThunk<
  IDataFromApi<{ totalCount: number }>,
  {
    city: string;
    page: number;
  },
  { rejectValue: string }
>("departments", async ({ city, page }, { rejectWithValue }) => {
  try {
    const { data } = await departmentsServiceApi({ city, page });
    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
