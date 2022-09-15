export interface post {
  comments:[],
  content:string,
  creator:{
    _id:string,
    nickName:string,
    avatar:string,
    sex:"male" | "female"
  },
  createdAt:string,
  imgURL:string,
  likes:[],
  _id:string
}
