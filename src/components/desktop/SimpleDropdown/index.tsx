import {FC} from "react";
import {Select} from 'antd';

interface ISimpleDropdownProps {
  options: [],
  placeholder: string,
  handleChange: () => void
}

const SimpleDropdown: FC<ISimpleDropdownProps> = ({options, placeholder, handleChange}) => {
  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}
export default SimpleDropdown;