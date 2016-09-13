import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openNextPost} from "../actions/posts";
import {openPrevPost} from "../actions/posts";
import {closePost} from "../actions/posts";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


const PostExpanded = ({ id, title, date, content, onNextClick, onPrevClick, onCloseClick})=> (
  <Paper zDepth={3}>
    <Card initiallyExpanded = {true}>
      <CardTitle
        title={title}
        subtitle={date}
        actAsExpander={true}
        showExpandableButton={true}
        onClick = { () => onCloseClick(id) }/>

      <CardText>
        {content}
      </CardText>

    <CardActions>
      <FlatButton label="<="
                  onClick={() => onPrevClick(id) }/>
      <FlatButton label="=>"
                  onClick={() => onNextClick(id) }/>
    </CardActions>
  </Card>
  </Paper>

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

const mapDispatchToProps = dispatch => ({
    onNextClick: (id) => dispatch(openNextPost(id)),
    onPrevClick: (id) => dispatch(openPrevPost(id)),
    onCloseClick: (id) => dispatch(closePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostExpanded)