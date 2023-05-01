import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/post';

const Posts = () => {
    const posts=useLoaderData();
    
  //  console.log(posts)
    return (
        <div>
            <h3>All posts are here</h3>
            {
                posts.map(post=><Post key={post.id} post={post}></Post>)
            }

        </div>
    );
};

export default Posts;