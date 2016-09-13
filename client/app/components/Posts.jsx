import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PostBriefly from './PostBriefly';
import PostCollapsed from './PostCollapsed';
import PostExpanded from './PostExpanded';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


import {fetchPosts,fetchNextPosts,fetchPrevPosts} from "../actions/posts";

const PostsView = ({ categories, posts, term, page, expandedId,  isLast,  onLoadClick, onOpenClick, onNextClick, onPrevClick})=> (
  <section>
    <DropDownMenu value={term} onChange={(event,key) => onLoadClick(key,page)}>
      <MenuItem  value='0' primaryText='Главная' />
      { categories.map(item => <MenuItem key={item.term_id} value={item.term_taxonomy_id} primaryText={item.name} />) }
    </DropDownMenu>

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
  term:  PropTypes.number.isRequired,
  categories:  PropTypes.array.isRequired,
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
    term: state.posts.term,
    categories: state.taxonomy.items.category || [],
    isLast: false,
    posts: state.posts.items,
    expandedId: state.posts.item ? state.posts.item.ID : undefined,
  }
};

const mapDispatchToProps = dispatch => ({
    onLoadClick: (term, page) => dispatch(fetchPosts(term, page)),
    onNextClick: (page) => dispatch(fetchNextPosts(page)),
    onPrevClick: (page) => dispatch(fetchPrevPosts(page)),
    onOpenClick: (id) => dispatch(fetchPost(id,term))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsView)