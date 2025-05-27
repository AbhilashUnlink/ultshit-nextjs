import { theme } from '@/constants/theme'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedPosts = () => {
    const posts = [
        {
            id: 1,
            title: "Exploring Mountains and Snow",
            description:
                "Discover the serene beauty of snow-capped mountains and breathtaking winter landscapes.",
            image: "/images/post-1.jpg",
            href: "/blog",
        },
        {
            id: 2,
            title: "Birds and Animals in the Wild",
            description:
                "A close look at the fascinating wildlife, from colorful birds to majestic animals.",
            image: "/images/post-2.jpg",
            href: "/blog",
        },
        {
            id: 3,
            title: "Romance and Monsoon Long Drives",
            description:
                "Experience the magic of rainy season road trips filled with romance and adventure.",
            image: "/images/post-3.jpg",
            href: "/blog",
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="relative h-56">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    priority={post.id === 1}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-3">{post.title}</h3>
                                <p className="text-gray-600 mb-6">{post.description}</p>
                                <Link
                                    href={post.href}
                                    className={`inline-flex items-center ${theme.colors.primary.text} ${theme.colors.primary.textHover} font-semibold group`}
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPosts
