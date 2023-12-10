import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";
import {IQuestionAnswerSlice} from "@/types";

const initialState: IQuestionAnswerSlice = {
  questionsAnswers: []
}

export const quizSlice = createSlice({
  initialState,
  name: 'quizSlice',
  reducers: {
    setAnswer: (state, {payload}) => {
      const findElements = state.questionsAnswers.find((item) => item.id === payload.id)
      if (!findElements) {
        state.questionsAnswers.push(payload)
      } else {
        state.questionsAnswers = state.questionsAnswers.map((item) => item.id === payload.id ? payload : item)
      }
    },
    resetAnswers: (state) => {
      state.questionsAnswers = []
    }
  },
})

export const {setAnswer, resetAnswers} = quizSlice.actions

export const questionsAnswersSelector = (state: RootState) => state.quiz.questionsAnswers

export default quizSlice.reducer