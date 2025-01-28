import React from 'react'
import BgPic from "@/app/Public/BgPic";
import Header from "../Components/Header/Header"
import BlogCard from "../Components/BlogDetailsComp/BlogDetailsCard"

const BlogDetails = () => {
  return (
    <>
      <Header />

      <BgPic PageHeading='Blog Details' PageName='Blog details' />

      <BlogCard />

    </>
  )
}

export default BlogDetails;