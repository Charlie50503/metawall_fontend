export interface httpResponse {
  data:any,
  status:string,
  message:string,
  error:{
    statusCode:string,
    isOperational:boolean,
  }
}
