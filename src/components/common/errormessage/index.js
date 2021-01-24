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
import AvailabilityContext from "../../../context";
import { TOGGLE_ERROR } from '../../../store/_actions';
import "./_styles.css";

const ErrorMessage = ({ title, message }) => {
  const [state, dispatch] = React.useContext(AvailabilityContext);
  const { error } = state;

  const closeError = () => {
    dispatch({type: TOGGLE_ERROR});
  }

  if (!error) return null;

  return (
    <div className="alert alert-danger alert-dismissible show bottom-right">
      <button type="button" className="close pt-0 pr-2" data-dismiss="alert" onClick={closeError}>
        &times;
      </button>
      <strong>{title}</strong> {message}
    </div>
  );
};

export default ErrorMessage;
