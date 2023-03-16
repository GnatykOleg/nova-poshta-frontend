import axios, { AxiosResponse } from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";
import { IGetDepartmentsForCityData } from "../../types/redux.types";

import { toast } from "react-toastify";

const { REACT_APP_BACKEND_BASE_URL } = process.env;

export const getDepartmentsForCity = createAsyncThunk<
  IGetDepartmentsForCityData,
  {
    city: string;
    page: number;
  },
  { rejectValue: string }
>("departments", async ({ city, page }, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<IGetDepartmentsForCityData> = await axios.get(
      `${REACT_APP_BACKEND_BASE_URL}/api/departments/?city=${city}&page=${page}`
    );

    return data;
  } catch (error: any) {
    toast.error(error.response.data.message);
    return rejectWithValue(error.message);
  }
});
