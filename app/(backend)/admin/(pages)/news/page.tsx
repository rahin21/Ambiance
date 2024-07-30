import PostTable from "@/components/tailAdmin/posts/postTable";
import SliderInfo from "@/components/tailAdmin/Sliders/sliderInfo";
import axios from "axios";
import React from "react";

async function News() {
  let slider;
  let posts;
  try {
    const res = await axios.get(`${process.env.NEXTAUTH_URL}/api/slider/news`);
    slider = res.data;
    const resNews = await axios.get(
      `${process.env.NEXTAUTH_URL}/api/post-key?key=news`
    );
    posts = resNews.data;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-black capitalize">
      Slider
      </h1>
      <SliderInfo slider={slider} />
      <h1 className="text-2xl font-semibold text-black capitalize my-5">
      news posts
      </h1>
      {posts.length > 0 && <PostTable post={posts} />}
    </div>
  );
}

export default News;
