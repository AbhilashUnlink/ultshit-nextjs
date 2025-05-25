'use client'
import React from 'react'
import './homebanner2.css'
import Link from 'next/link'
import Image from 'next/image'
import { theme } from '@/constants/theme'

const HomeBanner2 = () => {
    return (
        <section className="relative text-white py-20 md:py-32 overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg.jpg"
                    alt="Decorative background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            {/* Black Overlay */}
            <div className={`absolute inset-0 z-1 ${theme.overlay.hero}`}></div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                                Discover Amazing Content
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                            Explore our collection of premium resources, tutorials, and insights to boost your productivity.
                        </p>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <Link
                                href="/blog"
                                className={`inline-block bg-white ${theme.colors.primary.text} px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl`}
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/about"
                                className="inline-block border-2 border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="hidden md:block md:w-1/2 relative">
                        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <Image
                                src="/images/post-1.jpg"
                                alt="Featured content"
                                layout="fill"
                                objectFit="cover"
                                quality={100}
                                className="hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-cyan-400/20 blur-xl z-0"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-pink-400/20 blur-xl z-0"></div>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-cyan-400/80 animate-float"></div>
            <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-pink-400/80 animate-float animation-delay-2000"></div>
        </section>
    )
}

export default HomeBanner2