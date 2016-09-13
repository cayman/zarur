import * as api from "../api";


export const fetchTaxonomy = () => dispatch => {
  dispatch(requestTaxonomy());
  return api.get('taxonomy').then(data=>dispatch(receiveTaxonomy(data)))
};


export const REQUEST_TAXONOMY = 'REQUEST_TAXONOMY';
export const requestTaxonomy = (page, category) => ({
  type: REQUEST_TAXONOMY
});

export const RECEIVE_TAXONOMY = 'RECEIVE_TAXONOMY';
export const receiveTaxonomy = (data) => ({
  type: RECEIVE_TAXONOMY,
  data
});
