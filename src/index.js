import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

import Home from './components/home';
import Posts from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';

const App =()=>(

<BrowserRouter>
 <header>
    <NavLink to="/" exact activeStyle={{color:'red'}}
    activeClassName="selected">Home</NavLink><br/>

    <NavLink to="/posts" activeStyle={{color:'red'}}
    activeClassName="selected">Posts</NavLink><br/>

    <NavLink to="/profile" activeStyle={{color:'red'}}
    activeClassName="selected">Profile</NavLink><br/>
    <br/><br/>
  </header>
  <Switch>
  <Route path='/posts/:id' component={PostItem}/>
  <Route path='/posts' exact component={Posts}/>
  <Route path='/profile' exact component={Profile}/>
  <Route path='/' exact component={Home}/>
  </Switch>
  
 </BrowserRouter>

)
ReactDOM.render(<App />, document.getElementById('root'));

