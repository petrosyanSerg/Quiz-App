import {Card, Radio, Tooltip} from "antd";

import {IAnswer} from "@/types";
import {useAppDispatch, useAppSelector} from "@/redux/reduxHooks";
import {questionsAnswersSelector, setAnswer} from "@/redux/slices/quizSlice";
import StatusBox from "@/components/StatusBox";
import {dropdownData} from "@/helpers/constants/settingsPage";

import styles from "@/components/desktop/QuizCard/index.module.scss";

interface IQuizCardProps {
  id: string,
  current: number,
  question: string,
  category: string,
  difficulty: string,
  answers: IAnswer[],
}

const QuizCard = ({
                    id,
                    current,
                    answers,
                    category,
                    question,
                    difficulty,
                  }: IQuizCardProps) => {
  const dispatch = useAppDispatch()
  const questionAnswer = useAppSelector(questionsAnswersSelector)
  const status = dropdownData.find(item => item.value === difficulty)
  
  const handleChange = ({target: {value}}: any) => {
    const findAnswer = answers.find((item) => item.text === value)
    
    dispatch(setAnswer({
      id,
      text: findAnswer?.text,
      isCorrect: findAnswer?.isCorrect
    }))
  }
  return (
    <Card
      bordered
      hoverable
      title={<Tooltip placement="topLeft" title={question}>{question}</Tooltip>}
      className={styles.card}
    >
      <div className={styles.card__info}>
        <p className={styles.card__title}>Category: {category}</p>
        <p className={styles.card__status}>
          {status && <StatusBox text={status?.label} color={status?.color}/>}
        </p>
      </div>
      <Radio.Group
        size="middle"
        buttonStyle="solid"
        optionType="button"
        onChange={handleChange}
        value={questionAnswer[current]?.text}
      >
        <div className={styles.card__radio}>
          {answers?.map(({text}, i) => (
            <Radio value={text}>{`${i + 1}) ${text}`}</Radio>
          ))}
        </div>
      </Radio.Group>
    </Card>
  )
}
export default QuizCard;
