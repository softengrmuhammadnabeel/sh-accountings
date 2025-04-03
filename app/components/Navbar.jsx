// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false)
//   const router = useRouter()
//   const sideMenuRef = useRef()

//   const openMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(-16rem)'
//   }

//   const closeMenu = () => {
//     sideMenuRef.current.style.transform = 'translateX(16rem)'
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <>
//       <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
//         <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" />
//       </div>
//       <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50
//         ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
//         <a href="#top">
//           <Image
//             src={!isDarkMode && isScroll ? assets.logowotext : assets.logowotext}
//             alt='Logo'
//             className='w-28 h-30  cursor-pointer mr-14'
//           />
//         </a>
//         <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50 border
//           ${isScroll ? (isDarkMode ? 'text-white border-white' : 'text-black border-black') : 'text-white border-gray-200'}`}>
//           {/* <li><a className='font-Ovo' href="#top">Home</a></li>
//           <li><a className='font-Ovo' href="#about">About us</a></li>
//           <li><a className='font-Ovo' href="#services">Services</a></li>
//           <li><a className='font-Ovo' href="#work">My work</a></li>
//           <li><a onClick={() => router.push('/blogs')} className='font-Ovo' href="#blogs">Blogs</a></li>
//           <li><a className='font-Ovo' href="#contact">Contact me</a></li> */}
//           <li><Link href="/" className="font-Ovo">Home</Link></li>
//           <li><Link href="/about-us" className="font-Ovo">About us</Link></li>
//           <li><Link href="/services" className="font-Ovo">Our Services</Link></li>
//           {/* <li><Link href="/work" className="font-Ovo">My work</Link></li> */}
//           <li><Link href="/blogs" className="font-Ovo">Blogs</Link></li>
//           <li><Link href="/contact" className="font-Ovo">Contact Us</Link></li>
//         </ul>
//         <div className='flex items-center gap-4'>
//           <button onClick={() => setIsDarkMode(prev => !prev)}>
//             <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Toggle Dark Mode' className='w-6' />
//           </button>
//           <a href="#contact"
//             className={`hidden lg:flex items-center gap-3 px-10 py-2.5 rounded-full ml-4 font-Ovo border
//     ${isScroll ? (isDarkMode ? 'text-white border-white' : 'text-black border-black') : (isDarkMode ? 'text-white border-white' : 'text-white border-white')}`}>
//             Contact
//             <Image
//               src={isScroll ? (isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon) : assets.arrow_icon_dark}
//               alt='Arrow'
//               className='w-3'
//             />
//           </a>
//           <button className='block md:hidden ml-3' onClick={openMenu}>
//             <Image src={isScroll && !isDarkMode ? assets.menu_black : assets.menu_white} alt='Menu' className={`w-6`} />
//           </button>
//         </div>
//         <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
//          w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
//           <div className="absolute right-6 top-6 cursor-pointer" onClick={closeMenu}>
//             <Image
//               src={isScroll && isDarkMode ? assets.close_black : assets.close_white}
//               alt='Close'
//               className='w-5'
//             />
//           </div>
//           <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
//           <li><a className='font-Ovo' onClick={closeMenu} href="#about">About us</a></li>
//           <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
//           <li><a className='font-Ovo' onClick={closeMenu} href="#work">My work</a></li>
//           <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
//         </ul>
//       </nav>
//     </>
//   )
// }


// export default Navbar
// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import { useRouter } from 'next/navigation'
// import React, { useEffect, useRef, useState } from 'react'
// import Link from 'next/link'
// import { Typography, Box, Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material'
// import ContactUs from './ContactUs'

// const Navbar = ({ isDarkMode, setIsDarkMode }) => {
//   const [isScroll, setIsScroll] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const router = useRouter()
//   const sideMenuRef = useRef(null)
//   const [openModal, setOpenModal] = useState(false);  // Modal visibility state

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScroll(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
//         setMenuOpen(false)
//       }
//     }
//     if (menuOpen) {
//       document.addEventListener('mousedown', handleClickOutside)
//     }
//     return () => document.removeEventListener('mousedown', handleClickOutside)
//   }, [menuOpen])


//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     console.log("CLicking for closing")
//     setOpenModal(false);
//   };

//   return (
//     <nav className={`fixed w-full px-6 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 h-20 transition-all
//       ${isScroll ? "bg-white bg-opacity-90 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : "bg-transparent"}`}>

//       {/* Brand Name */}
//       <Box className="flex items-center">
//         <Typography
//           component="h5"
//           variant="h5"
//           className={`text-[44px] gotham-bold cursor-pointer tracking-wide transition-colors duration-300 
//           ${isScroll ? 'text-[#1F2943]' : 'text-white'}`}
//         >
//           Clear
//         </Typography>

//         <Typography
//           component="h5"
//           variant="h5"
//           className={`text-[56px] moontime font-extrabold cursor-pointer tracking-wide transition-colors duration-300 
//           ${isScroll ? 'text-[#1F2943]' : 'text-white'}`}
//         >
//           Horizon
//         </Typography>
//       </Box>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex flex-1 justify-center">
//         <ul className={`flex items-center gap-10 lg:gap-14 rounded-full px-10 py-2 shadow-md bg-opacity-50 border 
//           transition duration-300 ${isScroll ? 'text-black border-black' : 'text-white border-gray-300'}`}>
//           {["Home", "About Us", "Services", "Blogs", "Contact Us"].map((item, index) => (
//             <li key={index}>
//               <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                 className={`font-Ovo text-nowrap text-lg ${isScroll ? 'text-black hover:font-semibold' : 'hover:text-slate-100 hover:font-semibold'}`}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className='flex items-center gap-6'>

//         {/* Contact Button */}
//         <button onClick={handleOpenModal}
//           className={`hidden lg:flex items-center gap-3 px-6 py-2 rounded-full font-Ovo border transition shadow-sm text-lg
//             ${isScroll ? 'text-[#1F2943] border-black' : 'text-white border-white'}`}>
//           Contact
//           <Image
//             src={isScroll ? assets.arrow_icon : assets.arrow_icon_dark}
//             alt='Arrow'
//             className="w-4"
//           />
//         </button>

//         {/* Mobile Menu Button */}
//         <button className='block md:hidden' onClick={() => setMenuOpen(true)}>
//           <Image src={isScroll ? assets.menu_black : assets.menu_white} alt='Menu' className='w-7' />
//         </button>
//       </div>

//       {/* Mobile Sidebar Menu */}
//       <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//         onClick={() => setMenuOpen(false)}>
//       </div>

//       <div ref={sideMenuRef}
//         className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transition-transform duration-300 
//           ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

//         {/* Close Button */}
//         <button className="absolute top-5 right-5 text-gray-600 dark:text-white" onClick={() => setMenuOpen(false)}>
//           ✕
//         </button>

//         {/* Mobile Menu Items */}
//         <ul className="mt-16 flex flex-col items-start gap-6 px-6">
//           {["Home", "About Us", "Services", "Blogs", "Contact Us"].map((item, index) => (
//             <li key={index} className="w-full">
//               <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
//                 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-500 block py-2"
//                 onClick={() => setMenuOpen(false)} // Close menu on click
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <Dialog open={openModal} onClose={handleCloseModal} maxWidth={false}>
//         <DialogTitle>Contact Us</DialogTitle>
//         <DialogContent sx={{ width: '90vw' }}>
//           {openModal && <ContactUs closeModal={handleCloseModal()} />}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="primary">Close</Button>
//         </DialogActions>
//       </Dialog>

//     </nav>
//   )
// }

// export default Navbar


import { assets } from '@/assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Typography, Box, Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material'
import ContactUs from './ContactUs'
import ContactModal from './page-components/ContactModal'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const sideMenuRef = useRef(null)
  const [openModal, setOpenModal] = useState(false);  // Modal visibility state

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log("Clicking for closing")
    setOpenModal(false);
  };

  return (
    <nav className={`fixed w-full px-6 lg:px-12 xl:px-[10%] py-4 flex items-center justify-between z-50 h-20 transition-all
      ${isScroll ? "bg-white bg-opacity-90 backdrop-blur-lg shadow-md dark:bg-darkTheme dark:shadow-white/20" : "bg-transparent"}`}>

      {/* Brand Name */}
      <Box className="flex items-center">
        <Typography
          component="h5"
          variant="h5"
          className={`text-[44px] gotham-bold cursor-pointer tracking-wide transition-colors duration-300 
          ${isScroll ? 'text-[#1F2943]' : 'text-white'}`}
        >
          Clear
        </Typography>

        <Typography
          component="h5"
          variant="h5"
          className={`text-[56px] moontime font-extrabold cursor-pointer tracking-wide transition-colors duration-300 
          ${isScroll ? 'text-[#1F2943]' : 'text-white'}`}
        >
          Horizon
        </Typography>
      </Box>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className={`flex items-center gap-10 lg:gap-14 rounded-full px-10 py-2 shadow-md bg-opacity-50 border 
          transition duration-300 ${isScroll ? 'text-black border-black' : 'text-white border-gray-300'}`}>
          {["Home", "About Us", "Services", "Blogs", "Contact Us"].map((item, index) => (
            <li key={index}>
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`font-Ovo text-nowrap text-lg ${isScroll ? 'text-black hover:font-semibold' : 'hover:text-slate-100 hover:font-semibold'}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-6'>

        {/* Contact Button */}
        <button onClick={handleOpenModal}
          className={`hidden lg:flex items-center gap-3 px-6 py-2 rounded-full font-Ovo border transition shadow-sm text-lg
            ${isScroll ? 'text-[#1F2943] border-black' : 'text-white border-white'}`}>
          Contact
          <Image
            src={isScroll ? assets.arrow_icon : assets.arrow_icon_dark}
            alt='Arrow'
            className="w-4"
          />
        </button>

        {/* Mobile Menu Button */}
        <button className='block md:hidden' onClick={() => setMenuOpen(true)}>
          <Image src={isScroll ? assets.menu_black : assets.menu_white} alt='Menu' className='w-7' />
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}>
      </div>

      <div ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transition-transform duration-300 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-600 dark:text-white" onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        {/* Mobile Menu Items */}
        <ul className="mt-16 flex flex-col items-start gap-6 px-6">
          {["Home", "About Us", "Services", "Blogs", "Contact Us"].map((item, index) => (
            <li key={index} className="w-full">
              <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-500 block py-2"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us Modal */}
      {
        openModal &&
        <Dialog open={openModal} onClose={handleCloseModal} maxWidth={false}>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogContent sx={{ width: '90vw' }}>
            {/* Pass the function without invoking it immediately */}
            <ContactModal closeModal={handleCloseModal} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">Close</Button>
          </DialogActions>
        </Dialog>
      }

    </nav>
  )
}

export default Navbar

