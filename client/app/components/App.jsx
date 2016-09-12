import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Posts from './Posts';
import Counter from './Counter';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div id="content">
          <section>
            <h1>&nbsp;</h1>
            <Counter />
            <h2>Welcome!</h2>
            <ul>
              <li><a href="http://brunch.io/">Brunch</a></li>
              <li><a href="https://facebook.github.io/react/">React</a></li>
              <li><a href="http://redux.js.org">Redux</a></li>
            </ul>
          </section>
          <Posts />
        </div>
      </MuiThemeProvider>
    );
  }
}
