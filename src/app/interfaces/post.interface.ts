import { creator } from "./creator.interface";

export interface post {
  comments:[],
  content:string,
  creator:creator,
  createdAt:string,
  imgURL:string,
  likes:[],
  _id:string
}
