import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from "@/redux/store";
import type {PayloadAction} from '@reduxjs/toolkit'

import {LOADED} from "@/helpers/constants/global";
import {categoriesThunkExtraReducer} from "@/redux/createThunk/settingsThunk";
import {ICategoriesData} from "@/types";

interface IFilters {
  limit: number;
  selectedCategory: string;
  selectedDifficulty: string;
};

interface ISettingsSlice {
  loadingStatus: string;
  error: string;
  dropdownCategories: string[]; // Replace
  filters: IFilters;
  categoriesData: ICategoriesData | {}
};

const initialState: ISettingsSlice = {
  loadingStatus: LOADED,
  error: "",
  dropdownCategories: [],
  filters: {
    limit: 0,
    selectedCategory: "",
    selectedDifficulty: ""
  },
  categoriesData: {}
}

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    categoriesThunkExtraReducer(builder)
  }
})

export const {} = settingsSlice.actions

export const settingsSelector = (state: RootState) => state.settings
export default settingsSlice.reducer