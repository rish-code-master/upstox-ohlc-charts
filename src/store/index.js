/**
 * Copyright (c) 2021
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-01-16 05:00:00 
 */
import React from "react";
import initialState from './_initialState';
import availabilityReducer from './_reducers';
import AvailabilityContext from '../context';

const AvailabilityContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(availabilityReducer,initialState);

  return (
    <AvailabilityContext.Provider value={[state, dispatch]}>
      {props.children}
    </AvailabilityContext.Provider>
  );
};

export default AvailabilityContextProvider;
