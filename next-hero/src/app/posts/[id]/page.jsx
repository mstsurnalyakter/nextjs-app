import {  getSinglePost } from '@/services/postAPI';
import React from 'react'

const PostDetailsPage = async ({params}) => {

    const paramsId = parseInt(params?.id);
    const {userId,id,title,body} = await getSinglePost(paramsId);


  return (
    <div className='min-h-screen flex items-center gap-6 justify-center flex-col'>
        <h3>Post Details of {params?.id}</h3>
        <div className='w-1/2 mx-auto space-y-2 border-2 p-3'>
            <h3>UserId: {userId}</h3>
            <h3>Id:{id}</h3>
            <h3>Title: {title}</h3>
            <p>Description: {body}</p>

        </div>
    </div>
  )
}

export default PostDetailsPage