import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import PostBriefly from './PostBriefly';
import PostCollapsed from './PostCollapsed';
import PostExpanded from './PostExpanded';
import Paginator from './Paginator';
import Categories from './Categories';

import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';


import {openPost} from "../actions/posts";

const PostsView = ({ term, taxonomyId, total, page, posts, lastPage, expandedId,  onOpenClick})=> (
  <section>

    { term ? <h4>Булек архивы:{ term } ({ total })</h4> : '' }

    <Categories/>
    <h5>  {page} - {lastPage} </h5>

    <Paginator/>

    { posts.map(post => !expandedId ?
      <PostBriefly key={post.ID} post = {post} onClick={() => onOpenClick(post.ID)} /> :
      ( post.ID === expandedId ?
          <PostExpanded key={post.ID} /> :
          <PostCollapsed key={post.ID} post = {post} onClick={() => onOpenClick(post.ID)} />
      )
    )}

    <Paginator/>

  </section>
);

PostsView.propTypes = {
  taxonomyId:  PropTypes.string,
  term:  PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,

  total:  PropTypes.number,
  page:  PropTypes.number.isRequired,
  lastPage:  PropTypes.number,

  expandedId:  PropTypes.number,

  onOpenClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    taxonomyId: state.posts.taxonomy ? state.posts.taxonomy.term_taxonomy_id : null,
    term: state.posts.taxonomy ? state.posts.taxonomy.name : 'Главная страница',
    posts: state.posts.items,

    total: state.posts.total,
    page: state.posts.page,
    lastPage: state.posts.lastPage,

    expandedId: state.posts.item ? state.posts.item.ID : undefined,
  }
};

const mapDispatchToProps = dispatch => ({
    onOpenClick: (id) => dispatch(openPost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsView)