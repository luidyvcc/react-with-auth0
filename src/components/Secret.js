import React from 'react';

const Secret = ({ auth }) => {
  return <div>
    This is a super secret area.
    <br />
    <button onClick={auth.logout}>Logout</button>
  </div>
};

export default Secret;