import React from 'react'

import { Redirect } from "react-router-dom";
import { getUser2 } from '../../../utils/storage';

const GlobalRequireAuth = props => {
  if (!getUser2()) {
    return (<Redirect to={'/home/params'}/>)
  }
  return (props.children);
};

export default GlobalRequireAuth;
