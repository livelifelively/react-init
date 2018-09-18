import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<App/>, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
