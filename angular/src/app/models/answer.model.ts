import { Question } from "./question.model";

export interface Answer {
  index_reponse: number;
  next_question: Question;
}
