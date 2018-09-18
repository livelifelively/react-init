import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Counter from './components/counter/Counter';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    );
  };
}

export default App;
