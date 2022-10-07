const API_LIST = {
  GET: {
    ALL_POST: (sort:string) => `/post/all-post?sort=${sort}`,
    PERSON_POST: (userId:string) => `/post/person-post/${userId}`,
    SEARCH_POST: (keyword:string,sort:string) => `/post/?q=${keyword}&sort=${sort}`,
    USER_PROFILE: (userId:string) => `/user/profile/${userId}`,
    CHECK_IS_USER:`/user/check-is-user`,
    LIKE_LIST:(userId:string) => `/like/person-post/${userId}`,
  },
  POST:{
    CREATE_POST:`/post/create-post`,
    COMMENT_CREATE: (postId:string) => `/comment/create/${postId}`,
    ADD_LIKE: (postId:string) => `/like/${postId}`,
    SIGN_IN:`/user/sign-in`,
    SIGN_UP:`/user/sign-up`,
    UPLOAD:`/upload`
  },
  DELETE:{
    DELETE_LIKE: (postId:string) => `/like/${postId}`
  }
}

export default API_LIST
