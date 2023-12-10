'use client'
import {useEffect} from "react";

import useNavigate from "@/helpers/hooks/useNavigate";
import {resetFilters} from "@/redux/slices/settingsSlice";
import CustomButton from "@/components/desktop/CustomButton";
import {useAppDispatch, useAppSelector} from "@/redux/reduxHooks";
import {numberCorrectSelector, questionsAnswersSelector, resetAnswers} from "@/redux/slices/quizSlice";

import styles from "@/sections/FinishPage/index.module.scss"

const FinishPage = () => {
  const navigate = useNavigate()
  const numberCorrect = useAppSelector(numberCorrectSelector)
  const questionAnswer = useAppSelector(questionsAnswersSelector)
  const dispatch = useAppDispatch()
  
  const resetState = () => {
    dispatch(resetAnswers())
    dispatch(resetFilters())
  }
  const handleClickHomePage = () => {
    navigate("/")
    resetState()
  }
  
  const handleClickSettingsPage = () => {
    navigate("/settings")
    resetState()
  }
  
  return (
    <div className={styles.finish}>
      <div className={styles.finish__title}>✅ Congratulations, you successfully passed the quizzes․</div>
      <div className={styles.finish__decription}>
        You answered <span>{numberCorrect}</span> out of <span>{questionAnswer.length}</span> correctly
      </div>
      <div className={styles.finish__buttons}>
        <CustomButton text="Go To Home Page" onClick={handleClickHomePage} type="default"/>
        <CustomButton text="Go To Setting Page" onClick={handleClickSettingsPage} type="default"/>
      </div>
    </div>
  )
}
export default FinishPage