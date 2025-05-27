'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { whatsApp } from '@/helpers/helper.func';

const Page = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const onLetsConnectClick = () => whatsApp("Hi, I saw your work on blog hub");

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-12">
            <div className="max-w-5xl mx-auto px-6 py-24">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
                        variants={fadeIn}
                    >
                        <span className="inline-block hover:-translate-y-1 transition-transform duration-300">👋</span> Hi, {"I'm"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Abhilash Sharma</span>
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
                        variants={fadeIn}
                    >
                        Crafting <span className="font-medium text-gray-800">digital experiences</span> that are fast, functional & beautiful
                    </motion.p>
                </motion.div>

                <motion.div
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <div className="">
                        <motion.div
                            variants={fadeIn}
                        />

                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-gray-700"
                            variants={fadeIn}
                        >
                            With <span className="font-medium pb-1">3+ years of professional experience in React and Next js</span>, I specialize in building scalable web applications and intuitive mobile experiences. I transform complex problems into elegant digital solutions.
                        </motion.p>

                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-gray-700"
                            variants={fadeIn}
                        >
                            Currently shaping the future of payments at <span className="font-medium text-purple-600 hover:text-purple-700 transition-colors">Payment Options</span>, a Singapore-based fintech company building secure, seamless payment infrastructure for next-generation e-commerce.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4"
                            variants={fadeIn}
                        >
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="text-lg font-semibold text-blue-800 mb-3">Web Development</h3>
                                <p className="text-gray-700">Modern, responsive websites with attention to performance, accessibility, and user experience.</p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="text-lg font-semibold text-green-800 mb-3">Mobile Development</h3>
                                <p className="text-gray-700">Cross-platform mobile apps that feel native, with smooth animations and intuitive interfaces.</p>
                            </div>
                        </motion.div>

                        <motion.p
                            className="text-lg md:text-xl leading-relaxed text-gray-700 pt-6"
                            variants={fadeIn}
                        >
                            {"I'm"} always excited about new challenges and collaborations. If you have an interesting project or just want to discuss tech, <button onClick={onLetsConnectClick} className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors">{"let's"} connect</button> and create something remarkable together. <span className="inline-block animate-bounce">🚀</span>
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Page;