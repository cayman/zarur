import React from 'react';
import { connect } from 'react-redux';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

const Bottom = () => (
  <Paper>
     <BottomNavigation>
       <BottomNavigationItem
         icon = {<FontIcon className="material-icons">restore</FontIcon>}
         label='Post'/>
       <BottomNavigationItem
         icon = {<FontIcon className="material-icons">favorite</FontIcon>}
         label='Current'/>
     </BottomNavigation>
  </Paper>
);


const mapStateToProps = (state) =>({

});

const mapDispatchToProps = dispatch => ({

});
export default connect(mapStateToProps,mapDispatchToProps)(Bottom);