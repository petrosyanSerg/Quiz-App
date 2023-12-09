import {useEffect, useMemo, useState} from "react";

import {Button, message, Steps} from "antd";
import {ICorrectQuestion, IStep} from "@/types";

import QuizCard from "@/components/desktop/QuizCard";
import {useCurrent} from "@/helpers/hooks/useCurrent";

import styles from '@/sections/CardsList/index.module.scss'

interface ICardsList {
  questions: ICorrectQuestion[]
}

const CardsList = ({questions}: ICardsList) => {
  const [steps, setSteps] = useState<IStep[]>([])
  const {current, next, prev} = useCurrent(steps.length)
  
  useEffect(() => {
    const tempSteps = questions.map((item, i) => ({
      key: item.id,
      title: `Question ${i + 1}`
    }))
    
    setSteps(tempSteps)
  }, [questions]);
  
  return (
    <div className={styles.cardlist__container}>
      <div className={styles.cardlist__container__buttons}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button onClick={prev}>
            Previous
          </Button>
        )}
      </div>
      <div className={styles.cardlist__container__main}>
        <Steps
          responsive
          size="small"
          items={steps}
          current={current}
          direction="vertical"
          className={styles.cardlist__container__steps}
        />
        <QuizCard
          {...questions[current]}
        />
      </div>
    </div>
  )
}
export default CardsList
