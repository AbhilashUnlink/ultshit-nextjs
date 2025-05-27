'use client'
import React, { useEffect, useState } from 'react'
// import HomeBanner from '@/components/hero-section/HomeBanner'
import HomeBanner2 from '@/components/hero-section/HomeBanner2'
import CategoriesSection from '@/components/categories-section/CategoriesSection'
import FeaturedPosts from '@/components/featured-posts/FeaturedPosts'
import NewsLetterSection from '@/components/news-letter-section/NewsLetterSection'


const Home = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [])
  if (isClient) {
    return (
      <>
        <main className="min-h-screen pt-16 text-gray-900">
          {/* Hero Section */}
          <HomeBanner2 />

          {/* Featured Posts Section */}
          <FeaturedPosts />

          {/* Categories Section */}
          <CategoriesSection />
          <NewsLetterSection />
        </main>
      </>
    )
  } else {
    return (<></>)
  }
}
export default Home
