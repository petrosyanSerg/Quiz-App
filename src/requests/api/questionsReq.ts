import {IParams} from "@/types";
import instance from "@/requests/instance";

import {generateParams} from "@/helpers";

const QUESTIONS = '/questions'
export const getQuestions = async (params: IParams) => {
  const generatedParams = generateParams(params)
  return await instance.get(`${QUESTIONS}${generatedParams}`)
}