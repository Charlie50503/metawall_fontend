import { comment } from "./comment.interface";
import { creator } from "./creator.interface";

export interface post {
  comments:comment[],
  content:string,
  creator:creator,
  createdAt:string,
  imgURL:string,
  likes:[],
  _id:string
}
