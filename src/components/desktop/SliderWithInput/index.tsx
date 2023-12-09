import {FC} from "react";
import {InputNumber, Slider} from 'antd';

import styles from "@/components/desktop/SliderWithInput/index.module.scss"

interface ISliderWithInputProps {
  min: number,
  max: number,
  value: number | null | any,
  setValue: (e: number | null) => void
}

const SliderWithInput = ({
                           min,
                           max,
                           value,
                           setValue,
                         }: ISliderWithInputProps) => (
  <div className={styles.slider__wrapper}>
    <Slider
      min={min}
      max={max}
      value={value}
      onChange={setValue}
      className={styles.slider__wrapper__range}
    />
    <InputNumber
      min={min}
      max={max}
      value={value}
      onChange={e => setValue(e)}
      className={styles.slider__wrapper__input}
    />
  </div>
)

export default SliderWithInput;