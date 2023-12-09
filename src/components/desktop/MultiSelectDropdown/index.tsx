import {Select} from 'antd';

import styles from "@/components/desktop/MultiSelectDropdown/index.module.scss"

interface IMultiSelectDropdownProps {
  options: any,
  value: string[],
  placeholder: string,
  setValue: (e: string[]) => void
}

const MultiSelectDropdown = ({
                               value,
                               options,
                               setValue,
                               placeholder,
                             }: IMultiSelectDropdownProps) => (
  <Select
    value={value}
    mode="multiple"
    options={options}
    placeholder={placeholder}
    onChange={(e: string[]) => setValue(e)}
    className={styles.multiselect__dropdown}
  />
)


export default MultiSelectDropdown;