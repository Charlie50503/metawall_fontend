const API_LIST = {
  GET: {
    GET_ONE_POST: (postId:string) => `/post/${postId}`,
    ALL_POST: (sort:string) => `/post/all-post?sort=${sort}`,
    PERSON_POST: (userId:string,sort:string) => `/post/person-post/${userId}?&sort=${sort}`,
    SEARCH_PERSON_POST: (userId:string,keyword:string,sort:string) => `/post/search-person-post/${userId}?q=${keyword}&sort=${sort}`,
    SEARCH_POST: (keyword:string,sort:string) => `/post/?q=${keyword}&sort=${sort}`,
    USER_PROFILE: (userId:string) => `/user/profile/${userId}`,
    CHECK_IS_USER:`/user/check-is-user`,
    LIKE_LIST:(userId:string) => `/like/person-post/${userId}`,
    FOLLOWING:(userId:string) => `/follow/${userId}`
  },
  POST:{
    CREATE_POST:`/post/create-post`,
    COMMENT_CREATE: (postId:string) => `/comment/create/${postId}`,
    ADD_LIKE: (postId:string) => `/like/${postId}`,
    SIGN_IN:`/user/sign-in`,
    SIGN_UP:`/user/sign-up`,
    UPLOAD:`/upload`,
    FOLLOWING:(userId:string) => `/follow/${userId}`
  },
  PATCH:{
    USER_PROFILE: `/user/profile/`,
    UPDATE_PASSWORD: `/user/update-password`
  },
  DELETE:{
    DELETE_LIKE: (postId:string) => `/like/${postId}`,
    FOLLOWING:(userId:string) => `/follow/${userId}`
  }
}

export default API_LIST
