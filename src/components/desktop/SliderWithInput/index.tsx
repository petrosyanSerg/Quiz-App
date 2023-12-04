import {FC} from "react";
import {InputNumber, Slider} from 'antd';

import styles from "@/components/desktop/SliderWithInput/index.module.scss"

interface ISliderWithInputProps {
  min: number,
  max: number,
  limit:number,
  onChange: () => void
}

const SliderWithInput: FC<ISliderWithInputProps> = ({min, max, limit, onChange}) => {
  return (
    <div className={styles.slider_wrapper}>
      <Slider
        min={min}
        max={max}
        value={limit}
        onChange={onChange}
      />
      <InputNumber
        min={min}
        max={max}
        value={limit}
        onChange={onChange}
      />
    </div>
  )
}

export default SliderWithInput;