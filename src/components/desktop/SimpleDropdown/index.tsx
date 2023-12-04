import {FC} from "react";
import {Select} from 'antd';

interface ISimpleDropdownProps {
  options: [],
  handleChange: () => void
}

const SimpleDropdown: FC<ISimpleDropdownProps> = ({options, handleChange}) => {
  return (
    <Select
      options={options}
      onChange={handleChange}
    />
  )
}
export default SimpleDropdown;