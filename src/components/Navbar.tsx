'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    FiMenu,
    FiX,
    FiUser,
    FiHome,
    FiBook,
    FiGrid,
    FiInfo,
    FiChevronDown,
    FiInstagram,
    FiTwitter,
    FiGithub
} from 'react-icons/fi'

// Constants for navigation links with icons
const NAV_LINKS = [
    {
        href: '/',
        label: 'Home',
        icon: <FiHome className="w-4 h-4" />
    },
    {
        href: '/blog',
        label: 'Blog',
        icon: <FiBook className="w-4 h-4" />
    },
    {
        href: '/categories',
        label: 'Categories',
        icon: <FiGrid className="w-4 h-4" />,
        subLinks: [
            { href: '/tech', label: 'Technology' },
            { href: '/travel', label: 'Travel' },
            { href: '/food', label: 'Food' }
        ]
    },
    {
        href: '/about',
        label: 'About',
        icon: <FiInfo className="w-4 h-4" />
    }
]

const SOCIAL_LINKS = [
    { href: '#', icon: <FiInstagram className="w-5 h-5" />, label: 'Instagram' },
    { href: '#', icon: <FiTwitter className="w-5 h-5" />, label: 'Twitter' },
    { href: '#', icon: <FiGithub className="w-5 h-5" />, label: 'GitHub' }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/60 backdrop-blur-lg'}`}>
            {/* White accent line */}
            <div className={`absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <span className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">
                            BlogHub
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            {NAV_LINKS.map((link) => (
                                link.subLinks ? (
                                    <div key={link.href} className="relative group">
                                        <button className="flex items-center px-3 py-2 text-white/80 hover:text-white transition-colors">
                                            {link.icon && <span className="mr-2">{link.icon}</span>}
                                            {link.label}
                                            <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 origin-top-right scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                                            <div className="bg-black/80 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white/10">
                                                {link.subLinks.map((subLink) => (
                                                    <Link
                                                        key={subLink.href}
                                                        href={subLink.href}
                                                        className="block px-4 py-3 text-white hover:bg-white/10 transition-colors"
                                                    >
                                                        {subLink.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="relative px-3 py-2 text-white/80 hover:text-white transition-colors group flex items-center"
                                    >
                                        {link.icon && <span className="mr-2">{link.icon}</span>}
                                        {link.label}
                                            <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white w-0 group-hover:w-3/4 transition-all duration-300"></span>
                                    </Link>
                                )
                            ))}
                        </div>

                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-0.5 border border-white/20">
                            <FiUser className="w-4 h-4" />
                            <span>Sign In</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-white hover:text-white/80 focus:outline-none"
                        >
                            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu - Slides from left */}
            <div className={`md:hidden fixed inset-y-0 left-0 z-40 w-4/5 max-w-sm transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} !h-[100vh]`}>
                <div className="h-full bg-black/90 backdrop-blur-xl border-r border-white/10 flex flex-col">
                    <div className="p-4 border-b border-white/10">
                        <Link href="/" className="text-2xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>
                            BlogHub
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                                {link.icon && <span className="mr-3">{link.icon}</span>}
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Social links at bottom */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex justify-center space-x-4 mb-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="text-white/80 hover:text-white transition-colors"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 bg-white text-black px-4 py-3 rounded-lg hover:bg-white/90 transition-all">
                            <FiUser className="w-4 h-4" />
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </nav>
    )
}

export default Navbar