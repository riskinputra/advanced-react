import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './redux'
import TheHeader from './components/TheHeader'
import TheNews from './components/TheNews'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div style={{padding:'0 10px'}}>
        <TheHeader></TheHeader>
        <TheNews></TheNews>
      </div>
      </Provider>
    );
  }
}

export default App;
