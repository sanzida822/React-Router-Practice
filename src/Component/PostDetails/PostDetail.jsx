import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const postDetail=useLoaderData();
    console.log(postDetail)
    const{title}=postDetail;

    return (
        <div>
            <h1>Post details</h1>
             <p>{title}</p>
        </div>
    );
};

export default PostDetail;