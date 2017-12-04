import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from './Drawer'
import People from './People'
import Events from './Events'
import Header from './Header'
import './App.css';

injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div>
            <Header />
            <People />
            <Events />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
