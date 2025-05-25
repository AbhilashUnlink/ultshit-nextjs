'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
// import HomeBanner from '@/components/hero-section/HomeBanner'
import HomeBanner2 from '@/components/hero-section/HomeBanner2'
import { theme } from '@/constants/theme'
import NewsLetterSection from '@/components/news-letter-section/NewsLetterSection'
import CategoriesSection from '@/components/categories-section/CategoriesSection'
import FooterSection from '@/components/footer/FooterSection'

const Home = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, [])
  if (isClient) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-16 text-gray-900">
          {/* Hero Section */}
          <HomeBanner2 />

          {/* Featured Posts Section */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-16">Featured Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3]?.map((post) => (
                  <div
                    key={post}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-56">
                      <Image
                        src={`/images/post-${post}.jpg`}
                        alt={`Featured post ${post}`}
                        fill
                        className="object-cover"
                        priority={post === 1}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-3">Featured Post Title {post}</h3>
                      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                      <Link
                        href={`/post/${post}`}
                        className={`inline-flex items-center ${theme.colors.primary.text} ${theme.colors.primary.textHover} font-semibold group`}
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <CategoriesSection />

          {/* Newsletter Section */}
          <NewsLetterSection />
          <FooterSection />
        </main>
      </>
    )
  } else {
    return (<></>)
  }
}
export default Home
