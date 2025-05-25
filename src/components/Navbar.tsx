'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
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

const NAV_LINKS = [
    {
        href: '/',
        label: 'Home',
        icon: FiHome
    },
    {
        href: '/blog',
        label: 'Blog',
        icon: FiBook
    },
    {
        href: '/categories',
        label: 'Categories',
        icon: FiGrid,
        subLinks: [
            { href: '/tech', label: 'Technology' },
            { href: '/travel', label: 'Travel' },
            { href: '/food', label: 'Food' }
        ]
    },
    {
        href: '/about',
        label: 'About',
        icon: FiInfo
    }
]

const SOCIAL_LINKS = [
    { href: '#', icon: FiInstagram, label: 'Instagram' },
    { href: '#', icon: FiTwitter, label: 'Twitter' },
    { href: '#', icon: FiGithub, label: 'GitHub' }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [visible, setVisible] = useState(true)
    const pathname = usePathname()
    const navRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Always show navbar at top of page
            if (currentScrollY <= 10) {
                setVisible(true)
                setScrolled(false)
                setLastScrollY(currentScrollY)
                return
            }

            setScrolled(currentScrollY > 10)

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setVisible(false)
            } else if (currentScrollY < lastScrollY) {
                setVisible(true)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        document.body.style.filter = isMenuOpen ? 'brightness(0.5)' : ''
        return () => {
            document.body.style.overflow = ''
            document.body.style.filter = ''
        }
    }, [isMenuOpen])

    return (
        <nav
            ref={navRef}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-black/60 backdrop-blur-lg'} ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className={`absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center group">
                        <span className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">BlogHub</span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href

                            return link.subLinks ? (
                                <div key={link.href} className="relative group">
                                    <button
                                        className="flex items-center px-3 py-2 text-white/80 hover:text-white transition-colors"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        aria-controls="submenu-categories"
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {link.label}
                                        <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                                    </button>
                                    <div id="submenu-categories" className="absolute left-0 mt-2 w-48 origin-top-right scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                                        <div className="bg-black/80 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white/10">
                                            {link.subLinks.map((subLink) => (
                                                <Link
                                                    key={`${link.href}-${subLink.href}`}
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
                                    className={`relative px-3 py-2 group flex items-center ${isActive ? 'text-white' : 'text-white/80 hover:text-white'} transition-colors`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {link.label}
                                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white w-0 group-hover:w-3/4 transition-all duration-300 h-px"></span>
                                </Link>
                            )
                        })}
                        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition-all transform hover:-translate-y-0.5 border border-white/20">
                            <FiUser className="w-4 h-4" />
                            <span>Sign In</span>
                        </button>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                                setIsMenuOpen(!isMenuOpen)
                            }}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className="p-2 text-white hover:text-white/80"
                        >
                            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`md:hidden fixed inset-y-0 left-0 z-40 w-4/5 max-w-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} h-screen`}>
                <div className="h-full bg-black border-r border-white/20 flex flex-col">
                    <div className="p-4 border-b border-white/20 flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-white" onClick={() => setIsMenuOpen(false)}>
                            BlogHub
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-white/80">
                            <FiX className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-2">
                        {NAV_LINKS.map((link) => {
                            const Icon = link.icon
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center px-4 py-3 text-white font-medium text-lg hover:text-white hover:bg-white/30 rounded-lg transition-all duration-200 shadow-sm"
                                >
                                    <Icon className="mr-3 text-white text-xl" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="p-4 border-t border-white/20">
                        <div className="flex justify-center space-x-4 mb-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="text-white text-xl hover:text-white/90 transition-colors hover:scale-110 transform duration-200"
                                        aria-label={social.label}
                                    >
                                        <Icon />
                                    </a>
                                )
                            })}
                        </div>
                        <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium text-lg px-4 py-3 rounded-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl">
                            <FiUser className="w-5 h-5" />
                            <span>Sign In</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    )
}

export default Navbar