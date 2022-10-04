import { comment } from "./comment.interface";
import { creator } from "./creator.interface";
import { user } from "./user.interface";

export interface post {
  comments:comment[],
  content:string,
  creator:creator,
  createdAt:string,
  imgURL:string,
  likes:Array<user>,
  _id:string
}
