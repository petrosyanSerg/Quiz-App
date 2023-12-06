import {FC} from "react";
import {Select} from 'antd';
import {dropdownDataTypes} from "@/types";

interface ISimpleDropdownProps {
  options: dropdownDataTypes[],
  placeholder: string,
}

const SimpleDropdown: FC<ISimpleDropdownProps> = ({options, placeholder}) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
    />
  )
}
export default SimpleDropdown;