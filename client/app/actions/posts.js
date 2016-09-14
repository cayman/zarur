import * as api from "../api";

export const fetchPosts = (taxonomyId,page=1) => dispatch => {
     dispatch(requestPosts(taxonomyId,page));
     return api.get('posts',{taxonomyId,page}).then(data=>dispatch(receivePosts(taxonomyId,page,data)))
  };

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const requestPosts = (taxonomyId,page) => ({
  type: REQUEST_POSTS, taxonomyId, page
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = (taxonomyId, page, data) => ({
  type: RECEIVE_POSTS, taxonomyId, page, data
});



export const openPost = (id) =>  dispatch => {
  dispatch(requestPost(id));
  return api.get('posts/' + id).then(data=>dispatch(receivePost(data)))
};


export const REQUEST_POST = 'REQUEST_POST';
export const requestPost = (id) => ({
  type: REQUEST_POST,
  id
});

export const RECEIVE_POST = 'RECEIVE_POST';
export const receivePost = (data) => ({
  type: RECEIVE_POST,
  data
});

export const CLOSE_POST = 'CLOSE_POST';
export const closePost = (id) => ({
  type: CLOSE_POST,
  id
});

export const openNextPost = (id) => {};
export const openPrevPost = (id) => {};

