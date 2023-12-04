import {FC, useState} from "react";

import {Select} from 'antd';

interface IMultiSelectDropdownProps {
  placeholder: string,
  onChange: () => void,
  options: []
}

const MultiSelectDropdown: FC<IMultiSelectDropdownProps> = ({placeholder, options, onChange}) => {
  const [value, setValue] = useState()
  
  return (
    <Select
      size="large"
      value={value}
      mode="multiple"
      options={options}
      onChange={setValue}
      placeholder={placeholder}
    />
  )
}

export default MultiSelectDropdown;