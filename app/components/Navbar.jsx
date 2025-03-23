import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const  Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const router = useRouter()
  const sideMenuRef = useRef()

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
      </div>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
        <a href="#top">
          <Image
            src={!isDarkMode && isScroll ? assets.logo : assets.logo_dark}
            alt='Logo'
            className='w-28 cursor-pointer mr-14'
          />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 border
          ${isScroll ? (isDarkMode ? 'text-white border-white' : 'text-black border-black') : 'text-white border-gray-200'}`}>
          <li><a className='font-Ovo' href="#top">Home</a></li>
          <li><a className='font-Ovo' href="#about">About us</a></li>
          <li><a className='font-Ovo' href="#services">Services</a></li>
          <li><a className='font-Ovo' href="#work">My work</a></li>
          <li><a onClick={() => router.push('/blogs')} className='font-Ovo' href="#blogs">Blogs</a></li>
          <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Toggle Dark Mode' className='w-6' />
          </button>
          <a href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 font-Ovo border
    ${isScroll ? (isDarkMode ? 'text-white border-white' : 'text-black border-black') : (isDarkMode ? 'text-white border-white' : 'text-white border-white')}`}>
            Contact
            <Image
              src={isScroll ? (isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon) : assets.arrow_icon_dark}
              alt='Arrow'
              className='w-3'
            />
          </a>
          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isScroll && !isDarkMode ? assets.menu_black : assets.menu_white} alt='Menu' className={`w-6`} />
          </button>
        </div>
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
         w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
          <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
            <Image
              src={isScroll && isDarkMode ? assets.close_black : assets.close_white}
              alt='Close'
              className='w-5'
            />
          </div>
          <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#about">About us</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#work">My work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}


export default Navbar