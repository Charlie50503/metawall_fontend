const API_LIST = {
  GET: {
    ALL_POST: "/post/all-post",
    SEARCH_POST: (keyword:string) => `/post/?q=${keyword}`,
    USER_PROFILE: "/user/profile/6322cd14b48b514e1f3f16a8"
  },
  POST:{
    COMMENT_CREATE: (postId:string) => `/comment/create/${postId}`
  }
}

export default API_LIST
