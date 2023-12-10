'use client'
import {useEffect, useState} from "react";

import {message} from "antd";

import Spinner from "@/components/Spinner";
import CustomButton from "@/components/desktop/CustomButton";
import SimpleDropdown from "@/components/desktop/SimpleDropdown";
import SliderWithInput from "@/components/desktop/SliderWithInput";
import MultiSelectDropdown from "@/components/desktop/MultiSelectDropdown";
import {useAppDispatch, useAppSelector} from "@/redux/reduxHooks";
import {filtersSelector, setFilters} from "@/redux/slices/settingsSlice";
import useNavigate from "@/helpers/hooks/useNavigate";
import {dropdownData} from "@/helpers/constants/settingsPage";
import {getCategories} from "@/requests/api/categoriesReq";
import {resetAnswers} from "@/redux/slices/quizSlice";

import styles from "@/Pages/SettingsPage/index.module.scss"

const SettingsPage = () => {
  const navigate = useNavigate()
  const filters = useAppSelector(filtersSelector)
  const dispatch = useAppDispatch()
  
  const {limit, category, difficulty} = filters
  
  const [messageApi, contextHolder] = message.useMessage();
  
  const [options, setOptions] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string[]>(category)
  const [selectedLimit, setSelectedLimit] = useState<number | null>(limit)
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(difficulty)
  
  useEffect(() => {
    setIsLoading(true)
    
    getCategories()
    .then((res => {
      const {data} = res
      
      const dropdownOptions = Object.keys(data).reduce((acc: any, title: string) => {
        acc?.push({
          label: title,
          value: data[title][0]
        })
        return acc
      }, [])
      
      setOptions(dropdownOptions)
    }))
    .catch(e => console.error(e))
    .finally(() => setIsLoading(false))
  }, []);
  
  const handleClick = () => {
    dispatch(setFilters({
      limit: selectedLimit,
      category: selectedCategory,
      difficulty: selectedDifficulty
    }))
    dispatch(resetAnswers())
    messageApi.success("Your filters details have been saved.")
  }
  
  return (
    <div className={styles.settings__page}>
      {contextHolder}
      <h1 className={styles.settings__page__title}>Change Your Settings</h1>
      {isLoading
        ? <Spinner/>
        : <>
          <div className={styles.settings__page__filter}>
            <MultiSelectDropdown
              options={options}
              placeholder="Categories"
              value={selectedCategory}
              setValue={setSelectedCategory}
            />
          </div>
          <div className={styles.settings__page__filter}>
            <SimpleDropdown
              options={dropdownData}
              placeholder="Difficulty"
              value={selectedDifficulty}
              setValue={setSelectedDifficulty}
            />
          </div>
          <div className={styles.settings__page__filter}>
            <SliderWithInput
              min={5}
              max={30}
              value={selectedLimit}
              setValue={setSelectedLimit}
            />
          </div>
          <div className={styles.settings__page__buttons}>
            <CustomButton
              type="default"
              text="Save Settings"
              onClick={handleClick}
            />
            <CustomButton
              type="primary"
              text="Go To Home"
              onClick={() => navigate('/')}
            />
          </div>
        </>
      }
    </div>
  )
}
export default SettingsPage