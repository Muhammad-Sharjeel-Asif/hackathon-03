import React, { Suspense } from 'react'
import BgPic from "@/app/Public/BgPic";
import Header from "../Components/Header/Header"
import BlogCard from "../Components/BlogComponent/BlogCard"

const Blog = () => {
  return (
    <>
      <Header />

      <BgPic PageHeading='Blog List' PageName='Blog' />

      <Suspense fallback={<div>Loading...</div>}>
        <BlogCard />
      </Suspense>
      
    </>
  )
}

export default Blog;