import React from 'react';
import {Link, Redirect} from 'react-router-dom';

const Profile =(props)=>{

    const redirectUser =()=>{
        //use also for redirects
        props.history.push('/')

        // const userRedirect = true;

        // if(userRedirect){
        //     return(
        //         <Redirect to="/"/>
        //     )
        // }
    }
    return(
        <>
        <button onClick={()=>redirectUser()}>Redirect</button>
        <br/>
        <Link to={{
            pathname:`${props.match.url}/posts`
        }}>go to post</Link>
        </>
    ) 
}

export default Profile;