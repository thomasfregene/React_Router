import React from 'react';
import {withRouter} from 'react-router';

const PostHeader =(props)=>{
    console.log(props)
    return(
        <div>Post Header</div>
    ) 
}

export default  withRouter(PostHeader);