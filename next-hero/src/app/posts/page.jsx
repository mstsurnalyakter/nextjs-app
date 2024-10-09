import { getPosts } from '@/services/postAPI';
import React from 'react'


const PostPage = async () => {
    const postData = await getPosts();
    console.log("postData",postData);
  return (
    <div>
        <h4 className='text-3xl text-center pt-12'>Posts: {postData?.length}</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-12'>
            {
                postData?.slice(0,10).map(post=><div className='border-2 p-5 space-y-3' key={postData.id}>
                    <h3>UserId:{post.userId}</h3>
                    <h3>Id: {post.id}</h3>
                    <h3>Title: {post.title}</h3>
                    <p>Description: {post.body}</p>
                </div>)
            }
        </div>
    </div>
  )
}

export default PostPage