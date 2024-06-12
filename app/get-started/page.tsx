import React from "react";
import type { Metadata } from "next";
import AccordionComponent from "@/components/getStarted/accordion";





export const metadata: Metadata = {
  title: "Get Started",
};

const questions = [
  {
    ques: "What is Ambiance Design?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
  {
    ques: "How is Deborah Diershaw?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
  {
    ques: "What is Ambiance Design?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
  {
    ques: "What is Ambiance Design?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
  {
    ques: "What is Ambiance Design?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
  {
    ques: "What is Ambiance Design?",
    ans: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae libero optio eligendi fugit nihil reprehenderit aliquam, perferendis natus voluptate commodi quasi cupiditate quia nesciunt quo harum ducimus molestias illo nobis?",
  },
];

function page() {
  return (
    <div className="container">
      <h1 className="header font-palatino text-lightText text-[24px] tracking-[5px] text-center py-5">
        F.A.Q
      </h1>
      <AccordionComponent questions={questions}/>
    </div>
  );
}

export default page;
