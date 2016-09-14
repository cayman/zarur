import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import injectTapEventPlugin from 'react-tap-event-plugin';

import AppBar from 'material-ui/AppBar';
import Bottom from './Bottom';

import Posts from './Posts';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    //injectTapEventPlugin();
    return (
      <MuiThemeProvider>
        <div id="content">
          <AppBar title="Туган тел"
          />
          <Posts />
          <Bottom/>
        </div>
      </MuiThemeProvider>
    );
  }
}
