import fetch from 'isomorphic-fetch';

const composeParams = (params={}) =>
  Object.keys(params).reduce((composed,name) => params[name] ? `${composed}${composed.length > 0? '&':'?'}${name}=${params[name]}` :  composed,'');

export const get = (resource,params) => {
  const query = '/api/'+ resource + composeParams(params) ;
  console.log('fetch:', query, params);
  return fetch(query).then(r=>r.json());
};
