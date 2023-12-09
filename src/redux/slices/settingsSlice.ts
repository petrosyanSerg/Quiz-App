'use client'

import {createSlice} from '@reduxjs/toolkit'
import type {RootState} from "@/redux/store";

interface IFilters {
  limit: number;
  category: string[];
  difficulty: string;
};

interface ISettingsSlice {
  filters: IFilters;
};

const initialState: ISettingsSlice = {
  filters: {
    limit: 5,
    category: [],
    difficulty: ""
  },
}

export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    setFilters: (state, {payload}) => {
      state.filters = payload
    }
  },
})

export const {setFilters} = settingsSlice.actions

export const filtersSelector = (state: RootState) => state.settings.filters
export default settingsSlice.reducer