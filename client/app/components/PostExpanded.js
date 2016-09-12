import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openNextPost} from "../actions/posts";
import {openPrevPost} from "../actions/posts";
import {closePost} from "../actions/posts";


const PostExpanded = ({ id, title, date, content, onNextClick, onPrevClick, onCloseClick})=> (
  <section>
    <h4>{title} (<a onClick={() => onCloseClick(id)}>Close</a>)</h4>
    <h5>{date}</h5>
    <div>
       {content}
    </div>
    <div>
      <span onClick={() => onPrevClick(id)}>prev</span>
      <span onClick={() => onNextClick(id)}>next</span>
    </div>
  </section>
);

PostExpanded.propTypes = {
  id:  PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  const post = state.posts.item;
  return {
    id: post.ID,
    title: post.post_title,
    date: post.post_date,
    content: post.post_content
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNextClick: (id) => dispatch(openNextPost(id)),
    onPrevClick: (id) => dispatch(openPrevPost(id)),
    onCloseClick: (id) => dispatch(closePost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostExpanded)