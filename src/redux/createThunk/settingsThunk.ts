import {createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "@/redux/store";
import {getCategories} from "@/requests/api/categoriesReq";
import {LOADED, LOADING} from "@/helpers/constants/global";
import {ICategoriesData} from "@/types";

export const fetchSettingsCategories = createAsyncThunk(
  "settings/categories",
  async () => {
    const res = await getCategories()
    return res.data
  }
)

const categoriesThunkPending = ({settings}: RootState) => {
  settings.loadingStatus = LOADING
};
const categoriesThunkFulfilled = ({settings}: RootState, action: PayloadAction) => {

  
};

const categoriesThunkRejected = ({settings}: RootState) => {
  settings.loadingStatus = LOADED
  settings.error = "Oops something went wrong!"
};

export const categoriesThunkExtraReducer = (builder: any) => {
  builder
  .addCase(fetchSettingsCategories.pending, categoriesThunkPending)
  .addCase(fetchSettingsCategories.fulfilled, categoriesThunkFulfilled)
  .addCase(fetchSettingsCategories.rejected, categoriesThunkRejected);
};