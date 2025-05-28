'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    FiMenu,
    FiX,
    FiHome,
    FiBook,
    FiGrid,
    FiInfo,
    FiChevronDown,
    FiPhone
} from 'react-icons/fi'
import { CATEGORIES_CONSTANT } from '@/constants/categories.c'
import { callMe } from '@/helpers/helper.func'
import { SOCIAL_LINKS } from '@/constants/social-links.c'

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
        subLinks: CATEGORIES_CONSTANT
    },
    {
        href: '/about',
        label: 'About',
        icon: FiInfo
    }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [visible, setVisible] = useState(true)
    const pathname = usePathname()

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
        return () => {
            document.body.style.overflow = ''
            document.body.style.filter = ''
        }
    }, [isMenuOpen]);

    const theme = {
        dark: {
            background: "bg-black",
            color: "text-white",
            callMeBg: "bg-white",
            callMeText: "text-black",
        },
        light: {
            background: "bg-white",
            color: "text-black",
            callMeBg: "bg-black",
            callMeText: "text-white",
        },
    }

    const current = "light"; //"dark"
    const background = theme[current].background;
    const color = theme[current].color;
    const callMeBg = theme[current].callMeBg;
    const callMeText = theme[current].callMeText;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? `${background} backdrop-blur-xl` : `${background} backdrop-blur-lg`} ${visible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className={`absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center group">
                        <span className={`text-2xl font-bold ${color} group-hover:${color}/80 transition-colors`}>BlogHub</span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {NAV_LINKS.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href

                            return link.subLinks ? (
                                <div key={link.href} className="relative">
                                    {/* Navigation Item Container */}
                                    <div className="inline-block">
                                        {/* Button with hover area */}
                                        <div className="relative group">
                                            <button
                                                className={`flex items-center px-3 py-2 ${color}/80 hover:${color} transition-colors`}
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <Icon className="w-4 h-4 mr-2" />
                                                {link.label}
                                                <FiChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                                            </button>

                                            {/* Dropdown with hover-safe zone */}
                                            <div className="absolute left-0 top-full pt-2 w-48 transition-all duration-200
                     opacity-0 scale-95 invisible
                     group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                     before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-4">
                                                <div className={`${background} /80 backdrop-blur-xl rounded-lg shadow-xl overflow-hidden border border-white/10`}>
                                                    {link?.subLinks?.map((subLink) => (
                                                        <Link
                                                            key={`${link.href}-${subLink.href}`}
                                                            href={subLink.href}
                                                            className={`block px-4 py-3 ${color} hover:${callMeBg}/10 transition-colors`}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-3 py-2 group flex items-center ${isActive ? `${color}` : `${color}/80 hover:${color}`} transition-colors`}
                                >
                                    <Icon className="w-4 h-4 mr-2" />
                                    {link.label}
                                    <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 ${callMeBg} w-0 group-hover:w-3/4 transition-all duration-300 h-px`}></span>
                                </Link>
                            )
                        })}
                        <button onClick={callMe} className={`flex items-center gap-2 ${callMeBg} ${callMeText} px-4 py-2 rounded-full hover:${callMeBg}/90 transition-all transform hover:-translate-y-0.5 border border-white/20`}>
                            <FiPhone className="w-4 h-4" />
                            <span>Call Me</span>
                        </button>
                    </div>

                    {/* Mobile menu toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => {
                                // window.scrollTo({ top: 0, behavior: 'smooth' })
                                setIsMenuOpen(!isMenuOpen)
                            }}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            className="p-2 ${color} hover:${color}/80"
                        >
                            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div >

            {/* Mobile Sidebar */}
            < div className={`md:hidden fixed inset-y-0 left-0 z-40 w-4/5 max-w-sm transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} h-[calc(100vh-50px)]`}>
                <div className={`h-full ${background} border-r border-white/20 flex flex-col`}>
                    <div className="p-4 border-b border-white/20 flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold ${color}" onClick={() => setIsMenuOpen(false)}>
                            BlogHub
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="p-2 ${color} hover:${color}/80">
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
                                    className="flex items-center px-4 py-3 ${color} font-medium text-lg hover:${color} hover:bg-white/30 rounded-lg transition-all duration-200 shadow-sm"
                                >
                                    <Icon className="mr-3 ${color} text-xl" />
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>

                    <div className="p-4 border-t border-white/20">
                        <div className="flex justify-center space-x-4 mb-4">
                            {SOCIAL_LINKS?.map(({ label, href, icon: Icon }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="text-black/80 hover:text-black transition-colors hover:scale-110"
                                    aria-label={label}
                                >

                                    <Icon className="w-5 h-5" />

                                </Link>
                            ))}
                        </div>
                        <button onClick={callMe} className={`w-full flex items-center justify-center gap-2 ${callMeBg} ${color} font-medium text-lg px-4 py-3 rounded-lg hover:${callMeBg}/90 transition-all shadow-lg hover:shadow-xl`}>
                            <FiPhone className="w-5 h-5" />
                            <span className={`${callMeText}`}>Call me</span>
                        </button>
                    </div>
                </div>
            </div >

            {/* Overlay */}
            {
                isMenuOpen && (
                    <div
                        className={`md:hidden fixed inset-0 z-30 ${background}/50 backdrop-blur-sm`}
                        onClick={() => setIsMenuOpen(false)}
                        aria-hidden="true"
                    />
                )
            }
        </nav >
    )
}

export default Navbar