import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';

const App =()=>(

<BrowserRouter>
 <header>
    <Link to="/">Home</Link><br/>
    <Link to="/posts">Posts</Link><br/>
    <Link to={{
      pathname: '/profile',
      hash: '#francise',
      search: '?profile=true'
    }}>Profile</Link><br/>
    <br/><br/>
  </header>
  <Route path='/' exact component={Home}/>
  <Route path='/posts' component={Posts}/>
  <Route path='/profile' component={Profile}/>
 </BrowserRouter>
)
ReactDOM.render(<App />, document.getElementById('root'));

