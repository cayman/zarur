import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openPost} from "../actions/posts";

const PostCollapsed = ({ id, title, date, content, onOpenClick})=> (
  <section>
    <h4><a onClick={() => onOpenClick(id)}>{date} - {title}</a></h4>
  </section>
);

PostCollapsed.propTypes = {
  id:  PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onOpenClick: PropTypes.func.isRequired
};


const mapStateToProps = (state, props) => {
    const post = props.post;
    return {
      id: post.ID,
      title: post.post_title,
      date: post.post_date
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenClick: (id) => dispatch(openPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCollapsed)