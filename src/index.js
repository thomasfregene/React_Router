import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';

const App =()=>(
  <div>
    Hello
  </div>
)
ReactDOM.render(<App />, document.getElementById('root'));

