import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";

const initialState= {

}

export const quizSlice = createSlice({
  name: 'quizSlice',
  initialState,
  reducers: {
  },
})

export const {} = quizSlice.actions

// export const filtersSelector = (state: RootState) => state.settings.filters
export default quizSlice.reducer