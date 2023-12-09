'use client'
import {useEffect, useState} from "react";

import Spinner from "@/components/Spinner";
import CardsList from "@/sections/CardsList";
import {useAppSelector} from "@/redux/reduxHooks";
import {getQuestions} from "@/requests/api/questionsReq";
import {filtersSelector} from "@/redux/slices/settingsSlice";
import {ICorrectQuestion, IQuestion} from "@/types";

const QuizPage = () => {
  const filters = useAppSelector(filtersSelector)
  
  const {limit, category, difficulty} = filters
  
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [questions, setQuestions] = useState<ICorrectQuestion[]>([])
  
  useEffect(() => {
    setIsLoading(true)
    getQuestions({
      'categories': category.join(','),
      'limit': limit,
      'difficulty': difficulty
    })
    .then(({data}) => {
      const correctData =
        data.map(({
                    id,
                    question,
                    correctAnswer,
                    incorrectAnswers,
                    category: categoryData,
                    difficulty: difficultyData,
                  }: IQuestion) => {
          
          const incorrect = incorrectAnswers.map(text => ({
            text,
            isCorrect: false,
          }))
          
          const answers = [
            {
              text: correctAnswer,
              isCorrect: true,
            },
            ...incorrect
          ].sort(() => Math.random() - 0.5)
          
          return {
            id,
            answers,
            question,
            category: categoryData,
            difficulty: difficultyData,
          }
        })
      
      setQuestions(correctData)
    })
    .catch(e => console.error(e))
    .finally(() => setIsLoading(false))
  }, [filters]);
  
  return (
    isLoading
      ? <Spinner/>
      : <CardsList
        questions={questions}
      />
  )
}

export default QuizPage
