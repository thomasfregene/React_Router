import React from 'react'


 const Auth =(props)=> {
   const password = 'password12';

   if(password === 'password123'){
       return props.children
   }else{
       return <h3>You are not auth</h3>
   }
}

export default Auth;
