import React from 'react';
import Card from './hoc/card';
import Auth from './hoc/auth';

const Profile =(props)=>{

    
    return(
        <>
        <Auth>
        <Card>
        hello guys
        </Card>
        </Auth>
        
        
        </>
    ) 
}

export default Profile;