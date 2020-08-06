import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';

const App =()=>(

<BrowserRouter>
 <header>
    <div>header</div>
  </header>
  <Route path='/' exact component={Home}/>
  <Route path='/posts' component={Posts}/>
  <Route path='/profile' component={Profile}/>
 </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));

