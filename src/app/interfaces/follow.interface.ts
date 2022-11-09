import { user } from "./user.interface";

export interface follow {
  user:user,
  createdAt:string,
}

export type following = Array<follow>;
