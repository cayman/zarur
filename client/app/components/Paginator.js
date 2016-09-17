import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

import {fetchPosts,openPost} from "../actions/posts";

const Paginator = ({ taxonomyId, page, lastPage, onLoadClick})=> (
    <Paper>
      { page > 1 ? <FlatButton label="|&lt;=" onClick={() => onLoadClick(taxonomyId, 1)}/> : '' }
      { page > 2 ? <FlatButton label="&lt;=" onClick={() => onLoadClick(taxonomyId, page - 1)}/> : '' }
      { page < lastPage - 1 ? <FlatButton label="=&gt;" onClick={() => onLoadClick(taxonomyId, page + 1)}/> : '' }
      { page < lastPage ? <FlatButton label="=&gt;|" onClick={() => onLoadClick(taxonomyId, lastPage)}/> : '' }
    </Paper>
);

Paginator.propTypes = {
  taxonomyId:  PropTypes.string,
  page:  PropTypes.number.isRequired,
  lastPage:  PropTypes.number,
  onLoadClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    taxonomyId: state.posts.taxonomy ? state.posts.taxonomy.term_taxonomy_id : null,
    page: state.posts.page,
    lastPage:state.posts.lastPage,

  }
};

const mapDispatchToProps = dispatch => ({
  onLoadClick: (taxonomyId, page) => dispatch(fetchPosts(taxonomyId, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator)