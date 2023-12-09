import {IParams} from "@/types";

export const generateParams = (params: IParams) => {
  const generatedParameter = Object.keys(params).reduce((acc, key) => {
    params[key] ? acc += `&${key}=${params[key]}` : ''
    return acc
  }, '').replace("&",'')
  return `?${generatedParameter}`
}