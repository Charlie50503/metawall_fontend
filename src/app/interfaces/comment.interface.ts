import { creator } from "./creator.interface";

export interface comment {
  _id:string,
  comment:string,
  creator:creator,
}
