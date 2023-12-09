import CustomButton from "@/components/desktop/CustomButton";
import useNavigate from "@/helpers/hooks/useNavigate";

import styles from "@/sections/StartSection/index.module.scss"

const StartSection = () => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.start__section}>
      <h1 className={styles.start__section__title}>Quiz App</h1>
      <p className={styles.start__section__description}>
        Embark on a digital adventure with our QuizMaster app – a realm where intellect reigns. Explore diverse quizzes
        beyond code, unraveling mysteries from general knowledge to pop culture. Challenge friends, broaden your
        horizons, and let learning transcend the binary. 🌐✨
      </p>
      <div className={styles.start__section__buttons}>
        <CustomButton
          type="primary"
          text="Get Started"
          onClick={() => navigate('/quizzes')}
        />
        <CustomButton
          type="default"
          text="Settings"
          onClick={() => navigate('/settings')}
        />
      </div>
    </div>
  )
}

export default StartSection;