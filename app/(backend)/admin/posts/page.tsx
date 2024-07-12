import PostForm from '@/components/tailAdmin/posts/postForm'
import PostTable from '@/components/tailAdmin/posts/postTable'
import React from 'react'

async function getData() {
  const res = await fetch("http://localhost:3000/api/post", {
    next: { tags: ["post"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Posts() {
  const post = await getData();
  return (
    <div>
      <PostForm/>
      <PostTable post={post}/>
    </div>
  )
}

export default Posts