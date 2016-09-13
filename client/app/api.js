import fetch from 'isomorphic-fetch';

const composeParams = (params={}) =>
  Object.keys(params).reduce((composed,name) => ( composed.length > 0? composed +'&':'?') + name + '=' + params[name],'');

export const get = (resource,params) => {
  const query = '/api/'+ resource + composeParams(params) ;
  console.log('fetch:', query, params);
  return fetch(query).then(r=>r.json());
};
