import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PostBriefly from './PostBriefly';
import PostCollapsed from './PostCollapsed';
import PostExpanded from './PostExpanded';

import {fetchPosts,fetchNextPosts,fetchPrevPosts} from "../actions/posts";

const PostsView = ({ posts, page, expandedId,  isLast,  onLoadClick, onOpenClick, onNextClick, onPrevClick})=> (
  <section>
    <h4>Список постов <span onClick={() => onLoadClick(page)}>(LOAD)</span></h4>
    { posts.map(post => !expandedId ?
      <PostBriefly key={post.ID} post = {post} onClick={() => onOpenClick(post.ID)} /> :
      ( post.ID === expandedId ?
          <PostExpanded key={post.ID} /> :
          <PostCollapsed key={post.ID} post = {post} onClick={() => onOpenClick(post.ID)} />
      )
    )}
    <div>
      { page>0 ? <span onClick={() => onPrevClick(page)}>prev</span> : '' }
      { isLast ? <span onClick={() => onNextClick(page)}>next</span> : '' }
    </div>
  </section>
);

PostsView.propTypes = {
  page:  PropTypes.number.isRequired,
  isLast:  PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  openedId:  PropTypes.number,
  onLoadClick: PropTypes.func.isRequired,
  onOpenClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired

};


const mapStateToProps = (state) => {
  return {
    page: state.posts.page,
    isLast: false,
    posts: state.posts.items,
    expandedId: state.posts.item ? state.posts.item.ID : undefined,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadClick: (page) => dispatch(fetchPosts(page)),
    onNextClick: (page) => dispatch(fetchNextPosts(page)),
    onPrevClick: (page) => dispatch(fetchPrevPosts(page)),
    onOpenClick: (id) => dispatch(fetchPost(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsView)