import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import {fetchPosts} from "../actions/posts";


const Categories = ({ categories, taxonomyId, onLoadClick }) => (

  <DropDownMenu value={taxonomyId} onChange={ (event, index, value) => onLoadClick(value) }>
    <MenuItem  value='' primaryText='Главная' />
    { categories.map(category => <MenuItem key={category.term_id}
                                           value={category.term_taxonomy_id}
                                           primaryText={category.name + ' (' + category.term_taxonomy_id + ') '+ category.term_id} />) }
  </DropDownMenu>

);

Categories.propTypes = {
  taxonomyId:  PropTypes.string,
  categories:  PropTypes.array.isRequired,
  onLoadClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    taxonomyId: state.posts.taxonomy ? state.posts.taxonomy.term_taxonomy_id : null,
    categories: state.taxonomy.items.category || [],
  };
};

const mapDispatchToProps = dispatch => ({
  onLoadClick: (taxonomyId) => dispatch(fetchPosts(taxonomyId, 1)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories)