import {REQUEST_TAXONOMY, RECEIVE_TAXONOMY} from "../actions/taxonomy";


export default function posts(state = { items:{} },action){

  switch(action.type){
    case REQUEST_TAXONOMY:
      return { ...state, isFetching: true, didInvalidate: false };

    case RECEIVE_TAXONOMY:
      const items = action.data.items.reduce((groups,term)=>{
         (groups[term.taxonomy] = groups[term.taxonomy] || []).push(term);
         return groups;
      },{});
      return {
        items,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      };

    default:
      return state;
  }
}