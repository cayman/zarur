import {REQUEST_POSTS} from "../actions/posts";
import {RECEIVE_POSTS} from "../actions/posts";
import {REQUEST_POST} from "../actions/posts";
import {RECEIVE_POST} from "../actions/posts";
import {CLOSE_POST} from "../actions/posts";

export default function posts(state = { items:[], item: null , page: 0, term: 0 },action){

  switch(action.type){
    case REQUEST_POSTS:
      return { ...state, isFetching: true, didInvalidate: false };

    case RECEIVE_POSTS:
      return { ...state,
        term: action.term || '0',
        page: state.page || action.page,
        items: action.data.items,
        total: action.data.total,
        count: action.data.count,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      };

    case REQUEST_POST:
      return { ...state,
        item: { isFetching: true }
      };

    case CLOSE_POST:
      return { ...state, item: null  };

    case RECEIVE_POST:
      return { ...state,
        // item: action.data,
        item: { ...action.data, isFetching: false, lastUpdated: action.receivedAt }
      };


    default:
      return state;
  }
}