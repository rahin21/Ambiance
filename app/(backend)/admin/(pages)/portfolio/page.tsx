import React from 'react'
import PostTable from '@/components/tailAdmin/posts/postTable';
import axios from 'axios';

async function Portfolio() {
  const res = await axios.get(`http://localhost:3000/api/post-key?key=portfolio`);
  const posts = res.data;
  console.log(posts);
  return (
    <div>
      <PostTable post={posts}/>
    </div>
  )
}

export default Portfolio