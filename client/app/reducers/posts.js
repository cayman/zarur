import {REQUEST_POSTS} from "../actions/posts";
import {RECEIVE_POSTS} from "../actions/posts";
import {REQUEST_POST} from "../actions/posts";
import {RECEIVE_POST} from "../actions/posts";
import {CLOSE_POST} from "../actions/posts";

const lastPage = (total,perPage) => (total-(total%perPage))/perPage + (total%perPage > 0 ? 1 : 0 );

export default function posts(state = { items:[], item: null , page: 0, taxonomy: 0 },action){

  switch(action.type){
    case REQUEST_POSTS:
      return { ...state,
        isFetching: true,
        didInvalidate: false };

    case RECEIVE_POSTS:
      return { ...state,
        taxonomy: action.taxonomy,
        total: action.data.total,
        perPage: action.data.perPage,
        page: action.page,
        lastPage: lastPage(action.data.total,action.data.perPage),
        items: action.data.items,
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