'use client'
import {configureStore} from '@reduxjs/toolkit'

import settingsReducer from "@/redux/slices/settingsSlice"
import quizReducer from "@/redux/slices/quizSlice"

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    quiz: quizReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch