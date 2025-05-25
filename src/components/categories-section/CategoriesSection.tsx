import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './categories.css';

const CategoriesSection = () => {
    const categories = [
        { name: 'Technology', icon: '💻', color: 'from-blue-500 to-cyan-400' },
        { name: 'Lifestyle', icon: '🌟', color: 'from-purple-500 to-pink-400' },
        { name: 'Travel', icon: '✈️', color: 'from-amber-500 to-orange-400' },
        { name: 'Food', icon: '🍽️', color: 'from-emerald-500 to-teal-400' },
        { name: 'Fitness', icon: '💪', color: 'from-red-500 to-rose-400' },
        { name: 'Finance', icon: '💰', color: 'from-green-500 to-lime-400' },
        { name: 'Creativity', icon: '🎨', color: 'from-indigo-500 to-violet-400' },
        { name: 'Gaming', icon: '🎮', color: 'from-fuchsia-500 to-purple-400' }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

            {/* Floating gradient blobs */}
            <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-400/20 blur-[100px] animate-float"></div>
            <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-purple-400/20 blur-[100px] animate-float animation-delay-3000"></div>

            <div className="container mx-auto px-6 relative">
                {/* Section header */}
                <div className="text-center mb-20">
                    <span className="inline-block bg-black text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
                        EXPLORE CONTENT
                    </span>
                    <h2 className="text-2xl md:text-6xl font-bold mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                            Discover Categories
                        </span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Dive into our curated collections of premium content
                    </p>
                </div>

                {/* Categories grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`group relative bg-white rounded-2xl p-6 text-center cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl border border-gray-100`}
                        >
                            {/* Animated gradient background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Glow effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}></div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                                <span className="text-5xl mb-6 block transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                                    {category.icon}
                                </span>
                                <h3 className="text-xl font-bold mb-3 transition-colors duration-500 group-hover:text-white">
                                    {category.name}
                                </h3>
                                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center text-sm font-medium text-white">
                                    Explore <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View all button */}
                <div className="text-center mt-16">
                    <button className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        View All Categories
                        <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;