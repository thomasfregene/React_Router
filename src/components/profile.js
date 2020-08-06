import React from 'react';
import {Link} from 'react-router-dom';

const Profile =(props)=>{
    console.log(props)
    return(
        <Link to={{
            pathname:`${props.match.url}/posts`
        }}>go to post</Link>
    ) 
}

export default Profile;