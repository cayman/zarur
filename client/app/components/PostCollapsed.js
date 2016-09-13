import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openPost} from '../actions/posts';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import Paper from 'material-ui/Paper';

const PostCollapsed = ({ id, title, date, onOpenClick})=> (
  <Paper>
    <Card>
      <CardHeader
        title={title}
        subtitle={date}
        actAsExpander={true}
        showExpandableButton={true}
        onClick = {() => onOpenClick(id) }
      />
      </Card>
  </Paper>
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

const mapDispatchToProps = dispatch => ({
    onOpenClick: (id) => dispatch(openPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCollapsed)