import React from 'react'
import { getUser2 } from '../../../utils/storage';

import LoginForm from '../LoginForm'

const RequireAuth = props => {
  
  if (!getUser2()) {
    return <LoginForm {...props}/>
  }
  
  // if (Parse.User.current() && !Parse.User.current().get('emailVerified')) {
  //   return <LoginForm {...props} isVerified={false}/>
  // }
  
  return (props.children);
};

export default RequireAuth;
