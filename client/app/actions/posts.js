import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const CLOSE_POST = 'CLOSE_POST';

const catParam = (param,value) => value ? `?${param}=${value}` : '';

export const fetchPosts = (page, category) => dispatch => {
     dispatch(requestPosts(page,category));
     return fetch('/api/posts' + catParam(category))
       .then(r=>r.json())
       .then(data=>dispatch(receivePosts(data)))
  };

export const fetchNextPosts = (page, category) => {};
export const fetchPrevPosts = (page, category) => {};



export const requestPosts = (page, category) => ({
  type: REQUEST_POSTS,
  page,
  category
});

export const receivePosts = (data) => ({
  type: RECEIVE_POSTS,
  data
});



export const openPost = (id) =>  dispatch => {
  dispatch(requestPost(id));
  return fetch('/api/posts/' + id)
    .then(r=>r.json())
    .then(data=>dispatch(receivePost(data)))
};
export const closePost = (id) => ({
  type: CLOSE_POST,
  id
});

export const requestPost = (id) => ({
  type: REQUEST_POST,
  id
});

export const receivePost = (data) => ({
  type: RECEIVE_POST,
  data
});


export const openNextPost = (id) => {};
export const openPrevPost = (id) => {};

