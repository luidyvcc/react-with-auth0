import React from 'react';

const Main = ({ name, auth }) => {
  return <div>
    <p>
      Hello {name}
      Do you want the secret area?
      <a href="/secret">Click here</a>
    </p>

    {!auth.isAuthenticated() &&
      <div>
        <hr />
        Please, login first
        <hr />
        <button onClick={auth.login}>Login</button>
      </div>
    }
  </div>  
};

export default Main;