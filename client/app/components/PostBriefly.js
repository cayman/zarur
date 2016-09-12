import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openPost} from "../actions/posts";

const PostBriefly = ({ id, title, date, content, onOpenClick})=> (
  <section>
    <h4><a onClick={() => onOpenClick(id)}>{date} - {title}</a></h4>
    <div>
       {content}
    </div>
  </section>
);

PostBriefly.propTypes = {
  id:  PropTypes.string.isRequired,
  title:  PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onOpenClick: PropTypes.func.isRequired
};


const mapStateToProps = (state, props) => {
    const post = props.post;
    return {
      id: post.ID,
      title: post.post_title,
      date: post.post_date,
      content: post.post_content.substr(0,100)
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onOpenClick: (id) => dispatch(openPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostBriefly)