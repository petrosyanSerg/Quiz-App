import {Select} from 'antd';

import {dropdownDataTypes} from "@/types";

import styles from "@/components/desktop/SimpleDropdown/index.module.scss"

interface ISimpleDropdownProps {
  value: string,
  placeholder: string,
  options: dropdownDataTypes[],
  setValue: (e: string) => void
}

const SimpleDropdown = ({
                          value,
                          options,
                          setValue,
                          placeholder
                        }: ISimpleDropdownProps) => (
  <Select
    value={value}
    options={options}
    onChange={setValue}
    placeholder={placeholder}
    className={styles.simple_dropdown}
  />
)

export default SimpleDropdown;