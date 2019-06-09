import React from 'react';
import './css/main.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  state = {
    playerName: ''
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
