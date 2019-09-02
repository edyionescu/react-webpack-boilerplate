import React from 'react';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const ExportedApp = module.hot ? hot(App) : App;

export default ExportedApp;
