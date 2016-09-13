import {combineReducers} from 'redux';
import count from './count';
import posts from './posts';
import taxonomy from './taxonomy';
export default combineReducers({
  count,
  posts,
  taxonomy
});
