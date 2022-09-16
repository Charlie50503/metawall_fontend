const API_LIST = {
  GET: {
    ALL_POST: (sort:string) => `/post/all-post?sort=${sort}`,
    SEARCH_POST: (keyword:string,sort:string) => `/post/?q=${keyword}&sort=${sort}`,
    USER_PROFILE: "/user/profile/6322cd14b48b514e1f3f16a8"
  },
  POST:{
    COMMENT_CREATE: (postId:string) => `/comment/create/${postId}`
  }
}

export default API_LIST
