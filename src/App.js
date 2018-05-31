import React, { Component } from 'react';
import Series from './containers/Series/index'
import './App.css';
import PreviewSeries from './containers/PreviewSeries/index'

import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={Series} />
        <Route path="/series/:id" exact component={PreviewSeries} />
      </div>
    );
  }
}

export default App;
