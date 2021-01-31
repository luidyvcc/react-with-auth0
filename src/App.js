import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Secret from './components/Secret';
import NotFound from './components/NotFound';
import Callback from './components/Callback';

const App = props => {
  const { location, name, auth } = props;
  let mainComponent = "";
  switch(location) {
    case "":
      mainComponent = <Main {...props} />;
      break;
    case "callback":
      mainComponent = <Callback />;
      break;
    case "secret":
      mainComponent = auth.isAuthenticated() ? <Secret {...props} /> : <NotFound />;
      break;
    default:
      mainComponent = <NotFound />;
      break;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React, {name}</h1>        
        {mainComponent}
      </header>
    </div>
  );
}

export default App;
