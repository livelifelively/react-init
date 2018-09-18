import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(<App/>, document.getElementById('app'));

// Hot Module Replacement API
declare let module: { hot: any };

if (module.hot) {
  module.hot.accept();
}
