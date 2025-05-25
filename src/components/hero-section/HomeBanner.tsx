import React from 'react';
import './homebanner.css';
import Link from 'next/link';

const HomeBanner = () => {
    return (
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-32 overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_infinite]"></div>

            {/* Geometric pattern overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>

            {/* Floating circles decoration */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-pink-500/20 blur-xl"></div>
            <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-indigo-500/20 blur-xl"></div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                            Explore Our World
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        Immerse yourself in captivating stories, expert insights, and innovative ideas that will inspire your journey.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="/blog"
                            className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Start Exploring
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

            {/* Floating elements */}
            <div className="absolute top-1/4 right-1/4 w-6 h-6 rounded-full bg-cyan-400/80 animate-float"></div>
            <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-pink-400/80 animate-float animation-delay-2000"></div>
        </section>


    )
}

export default HomeBanner