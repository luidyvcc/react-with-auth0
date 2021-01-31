import React, { useEffect } from 'react';
import Auth from '../Auth';

const Callback = () => {
  useEffect(() => {
    const auth = new Auth();
    auth.handleAuthentication();
  }, []);

  return (
    <div>
      Loading...
    </div>
  )
};

export default Callback;