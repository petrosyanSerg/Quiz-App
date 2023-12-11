import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";
import {IQuestionAnswerSlice} from "@/types";

const initialState: IQuestionAnswerSlice = {
  questionsAnswers: [],
  numberCorrect: 0
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
      state = initialState
    },
    setCountNumber: (state) => {
      const filteredCorrect = state.questionsAnswers.filter(item => item.isCorrect)
      state.numberCorrect = filteredCorrect.length
    }
  },
})

export const {setAnswer, resetAnswers, setCountNumber} = quizSlice.actions

export const questionsAnswersSelector = (state: RootState) => state.quiz.questionsAnswers
export const numberCorrectSelector = (state: RootState) => state.quiz.numberCorrect

export default quizSlice.reducer
