import React from "react";
import {Link} from 'react-router-dom';

const Posts = () => {

  const ids = [
    {id: '1', name: 'Post 1'},
    {id: '2', name: 'Post 2'},
    {id: '3', name: 'Post 3'},
  ]


  // return ids.map(item=>(
  //   <div key={item.id}>
  //     <Link to={item.id}>{item.name}</Link>
  //   </div>
  // ))

  return[
    <div key='1'>Hello</div>,
    <div key='2'>i am a</div>,
    <div key='3'>react app</div>
  ]
  
};

export default Posts;
