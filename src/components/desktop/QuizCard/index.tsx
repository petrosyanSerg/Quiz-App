import {Card, Radio, Tooltip} from "antd";

import {ICorrectQuestion} from "@/types";
import StatusBox from "@/components/StatusBox";
import {dropdownData} from "@/helpers/constants/settingsPage";

import styles from "@/components/desktop/QuizCard/index.module.scss";

const QuizCard = ({
                    id,
                    answers,
                    category,
                    question,
                    difficulty,
                  }: ICorrectQuestion) => {
  const status = dropdownData.find(item => item.value === difficulty)
  
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
      <Radio.Group onChange={e => console.log(e)}>
        <div className={styles.card__radio}>
          {answers?.map(({text, isCorrect}) => (
            <Radio value={{id, text, isCorrect}}>{text}</Radio>
          ))}
        </div>
      </Radio.Group>
    </Card>
  )
}
export default QuizCard;
