import {FC} from "react";
import {Button} from 'antd';

interface ICustomButtonProps {
  text: string,
  onClick: () => void
}

const CustomButton:FC<ICustomButtonProps> = ({text, onClick}) => {
  return (
    <Button
      size="large"
      type="default"
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default CustomButton;