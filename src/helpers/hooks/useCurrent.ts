import {useState} from "react";

export const useCurrent = (length: number) => {
  const [current, setCurrent] = useState<number>(0);
  
  const next = () => {
    if (current > length - 1) return
    setCurrent(current + 1)
  }
  const prev = () => {
    if (current < 0) return
    setCurrent(current - 1)
  }
  
  return {next, prev, current}
}