import {combineReducers} from 'redux';
import count from './count';
import posts from './posts';
export default combineReducers({
  count,
  posts
});
