import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {openPost} from '../actions/posts';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

const PostBriefly = ({ id, title, date, content, onOpenClick})=> (
  <Paper zDepth={3}>
    <Card>
      <CardHeader
        title={title}
        subtitle={date}
        actAsExpander={true}
        showExpandableButton={true}
        onClick = {() => onOpenClick(id) }
      />
       <CardText>
         {content}
       </CardText>

      <CardActions>
        <FlatButton label="Укырга" primary={true}
                    onClick={() => onOpenClick(id) }/>
        <FlatButton label="Язырка"  />
      </CardActions>
    </Card>
  </Paper>
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

const mapDispatchToProps = dispatch => ({
    onOpenClick: (id) => dispatch(openPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostBriefly)