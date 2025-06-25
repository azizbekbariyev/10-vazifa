import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CommentId = () => {
    const { id } = useParams();
    const [comment, setComment] = useState(null);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [id]);
  return (
    <div>
        <h2 className='mb-3'>Comment Details</h2>
        {comment ? (
            <div className='card p-3'>
            <h5>{comment.name}</h5>
            <p><strong>Email:</strong> {comment.email}</p>
            <p><strong>Body:</strong> {comment.body}</p>
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
  )
}

export default CommentId