import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
  //  console.log(post)
const navigate=useNavigate();
    const{userId,title,id}=post;

    const handler=()=>{
         navigate(`/post/${id}`)
    }

    const handleBack=()=>{
        navigate(-1)
    }
    return (
        <div>
            <h2>{userId}</h2>
            <h3>{title}</h3>
            <p><Link to={`/post/${id}`}>PostDetails</Link></p>
            <Link to={`/post/${id}`}><button>Shoe details button using link</button></Link>

            {/* useNavigate hook */}
            <button onClick={handler}>
          with navigatehook button
            </button>
            <button onClick={handleBack}>go  back</button>
            
            
        </div>
    );
};

export default Post;