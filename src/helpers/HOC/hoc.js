import React from 'react';
import Search from '../components/dashboard/Search';

const newSearch = WrappedComponent => {
  // the component we return here is actually the HOC
  return props => <WrappedComponent {...props} />;
};

export const createSearch = newSearch(Search);

// called like this on a component

//import { createSearch } from '../../HOC/hoc';
{
  /* {createSearch()} */
}
