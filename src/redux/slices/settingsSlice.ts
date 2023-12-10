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
    },
    resetFilters: (state) => {
      state.filters = initialState.filters
    }
  },
})

export const {setFilters, resetFilters} = settingsSlice.actions

export const filtersSelector = (state: RootState) => state.settings.filters
export default settingsSlice.reducer