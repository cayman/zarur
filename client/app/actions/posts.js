import * as api from "../api";

export const fetchPosts = (term=0,page=1) => dispatch => {
     dispatch(requestPosts(page,term));
     return api.get('posts',{term,page}).then(data=>dispatch(receivePosts(page, term, data)))
  };

export const fetchNextPosts = (page, term) => {};
export const fetchPrevPosts = (page, term) => {};


export const REQUEST_POSTS = 'REQUEST_POSTS';
export const requestPosts = (page, term) => ({
  type: REQUEST_POSTS,
  page,
  term
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = (page, term, data) => ({
  type: RECEIVE_POSTS,
  page,
  term,
  data
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

