import { createAsyncThunk } from "@reduxjs/toolkit";

import { toast } from "react-toastify";
import axios, { AxiosResponse } from "axios";
import { IGetTrackingStatusData } from "../../types/redux.types";

const { REACT_APP_BACKEND_BASE_URL } = process.env;

export const getTrackingStatus = createAsyncThunk<
  IGetTrackingStatusData,
  string,
  { rejectValue: string }
>("tracking", async (trackingNumber: string, { rejectWithValue }) => {
  try {
    const { data }: AxiosResponse<IGetTrackingStatusData> = await axios.get(
      `${REACT_APP_BACKEND_BASE_URL}/api/tracking/${trackingNumber}`
    );

    return data;
  } catch (error: any) {
    toast.error(error.response.data.message);
    return rejectWithValue(error.message);
  }
});
