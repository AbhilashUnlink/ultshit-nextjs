import React from 'react';
import { FiSend, FiMail } from 'react-icons/fi';

const NewsLetterSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-950 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-50"></div>

            {/* Floating blobs */}
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-600/20 blur-[80px] animate-float"></div>
            <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-purple-600/20 blur-[80px] animate-float animation-delay-2000"></div>

            {/* Glowing dots */}
            <div className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.5)] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_4px_rgba(236,72,153,0.5)] animate-pulse animation-delay-1000"></div>

            <div className="container mx-auto px-6 relative">
                <div className="max-w-2xl mx-auto">
                    {/* Glass morphism container */}
                    <div className="backdrop-blur-lg bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 mb-6">
                                <FiMail className="w-8 h-8 text-indigo-300" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
                                Join Our Newsletter
                            </h2>
                            <p className="text-lg text-gray-300 max-w-md mx-auto">
                                Get exclusive content, updates, and offers straight to your inbox
                            </p>
                        </div>

                        {/* Modern form with floating label */}
                        <form className="space-y-6">
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    className="peer w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
                                    placeholder="Enter your email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-6 -top-3.5 text-sm text-cyan-200 bg-gray-900 px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:px-0 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-cyan-200 peer-focus:bg-gray-900 peer-focus:px-2"
                                >
                                    Email address
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1 active:translate-y-0"
                            >
                                <FiSend className="w-5 h-5" />
                                Subscribe Now
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-400 mt-6">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetterSection;