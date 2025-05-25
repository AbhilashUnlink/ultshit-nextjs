'use client'
import Link from 'next/link'
import {
    FiHome,
    FiBook,
    FiGrid,
    FiInfo,
    FiInstagram,
    FiTwitter,
    FiGithub,
    FiMail,
    FiHeart
} from 'react-icons/fi'

const NAV_LINKS = [
    { href: '/', label: 'Home', icon: <FiHome className="w-4 h-4" /> },
    { href: '/blog', label: 'Blog', icon: <FiBook className="w-4 h-4" /> },
    { href: '/categories', label: 'Categories', icon: <FiGrid className="w-4 h-4" /> },
    { href: '/about', label: 'About', icon: <FiInfo className="w-4 h-4" /> }
]

const SOCIAL_LINKS = [
    { href: '#', icon: <FiInstagram className="w-5 h-5" />, label: 'Instagram' },
    { href: '#', icon: <FiTwitter className="w-5 h-5" />, label: 'Twitter' },
    { href: '#', icon: <FiGithub className="w-5 h-5" />, label: 'GitHub' }
]

const FooterSection = () => {
    return (
        <footer className="bg-white/5 backdrop-blur-2xl border-t border-white/20">
            {/* Glowing white accent line */}
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand Section - Crystal Clear */}
                    <div className="flex flex-col p-6">
                        <Link href="/" className="text-2xl font-bold text-black mb-4 hover:text-black/90 transition-colors">
                            BlogHub
                        </Link>
                        <p className="text-black/80 mb-6">
                            Where ideas shine bright
                        </p>
                        <div className="flex space-x-4 mt-auto">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-black/80 hover:text-black transition-colors hover:scale-110"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section - Frosted Glass */}
                    <div className="grid grid-cols-2 gap-8">
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                            <h3 className="text-black text-sm font-bold uppercase tracking-wider mb-4">
                                Explore
                            </h3>
                            <div className="space-y-3">
                                {NAV_LINKS.slice(0, 2).map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center text-black/80 hover:text-black transition-colors group"
                                    >
                                        <span className="mr-2 group-hover:translate-x-1 transition-transform">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                            <h3 className="text-black text-sm font-bold uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <div className="space-y-3">
                                {NAV_LINKS.slice(2).map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center text-black/80 hover:text-black transition-colors group"
                                    >
                                        <span className="mr-2 group-hover:translate-x-1 transition-transform">
                                            {link.icon}
                                        </span>
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Section - Icy Glass Panel */}
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10">
                        <h3 className="text-black text-sm font-bold uppercase tracking-wider mb-4">
                            Stay Connected
                        </h3>
                        <div className="flex items-center text-black/80 hover:text-black transition-colors mb-6">
                            <FiMail className="w-5 h-5 mr-3 text-black/80" />
                            <span>hello@bloghub.com</span>
                        </div>

                    </div>
                </div>

                {/* Copyright Section - Crystal Clear Bar */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-black/60 text-sm">
                        © {new Date().getFullYear()} BlogHub. All rights reserved.
                    </p>
                    <div className="flex items-center mt-4 md:mt-0 text-black/60 text-sm">
                        <FiHeart className="w-4 h-4 mr-2 text-black/80" />
                        <span>Created by Abhilash Sharma</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection