import PostTable from "@/components/tailAdmin/posts/postTable";
import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import axios from "axios";
import React from "react";

async function News() {
  let slider;
  let posts;
  try {
    const res = await axios.get(`http://localhost:3000/api/slider/news`);
    slider = res.data;
    const resNews = await axios.get(
      `http://localhost:3000/api/post-key?key=news`
    );
    posts = resNews.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <SliderInfo slider={slider} />
      {posts.length > 0 && <PostTable post={posts} />}
    </div>
  );
}

export default News;
