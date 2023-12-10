export interface dropdownDataTypes {
  label: string,
  value: string,
  color: string
}

export interface ICategoriesData {
  "Arts & Literature": string[];
  "Film & TV": string[];
  "Food & Drink": string[];
  "General Knowledge": string[];
  "Geography": string[];
  "History": string[];
  "Music": string[];
  "Science": string[];
  "Society & Culture": string[];
  "Sport & Leisure": string[];
}

export interface IParams {
  [key: string]: string | number
}

export interface IQuestion {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
  regions: string[];
  isNiche: boolean;
}

export interface IAnswer {
  text: string,
  isCorrect: boolean
}

export interface ICorrectQuestion {
  id: string,
  question: string,
  category: string,
  difficulty: string,
  current: number,
  answers: IAnswer[],
}

export interface IStep {
  key: string
  title: string
}

export interface IQuestionsAnswers {
  id: string,
  text: string,
  isCorrect: boolean
}

export interface IQuestionAnswerSlice {
  questionsAnswers: IQuestionsAnswers[]
  numberCorrect: number
}