import {Badge} from "antd";

interface IStatusBoxProps {
  color: string,
  text: string
}

const StatusBox = ({color, text}: IStatusBoxProps) => (
  <Badge color={color} text={text}/>
)

export default StatusBox