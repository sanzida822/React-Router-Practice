import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendData=useLoaderData();
    console.log(friendData)
    const {name,id}=friendData;
    return (
        <div>
            <h3>Everything about this person</h3>
            <h1>name:{name}</h1>
            <h1>name:{id}</h1>
        </div>
    );
};

export default FriendDetails;