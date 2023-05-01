import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Friend = ({friend}) => {
    
   // console.log(friend)
    const{email,name,id,phone}=friend;
    return (
        <div >
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p> <Link to={`/friend/${id}`}>show me details</Link></p>
            
          
        </div>
    );
};

export default Friend;