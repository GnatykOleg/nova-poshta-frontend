import { createAsyncThunk } from "@reduxjs/toolkit";
import { IDataFromApi } from "../../types/redux.types";
import { trackingStatusServiceApi } from "../../services/api/trackingStatusServiceApi";
import { toast } from "react-toastify";

export const getTrackingStatus = createAsyncThunk<
  IDataFromApi<[]>,
  string,
  { rejectValue: string }
>("tracking", async (billOfLading: string, { rejectWithValue }) => {
  try {
    const { data } = await trackingStatusServiceApi(billOfLading);

    if (data.data[0]?.StatusCode === "3")
      toast.error(`ТТН: ${data.data[0]?.Number}  Не знайдений у базi...`);

    return data;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
