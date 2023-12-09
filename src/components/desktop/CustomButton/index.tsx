import {FC} from "react";

import {Button} from 'antd';

interface ICustomButtonProps {
  text: string,
  onClick: () => void,
  type: "text" | "default" | "link" | "primary" | "dashed" | undefined
}

const CustomButton: FC<ICustomButtonProps> = ({text, type = "default", onClick}) => {
  return (
    <Button
      size="large"
      type={type}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default CustomButton;