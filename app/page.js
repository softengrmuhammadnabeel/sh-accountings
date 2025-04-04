'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia
      ('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)

    } else {
      setIsDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      window.dispatchEvent(new Event("themeChange"));

    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
      window.dispatchEvent(new Event("themeChange"));
    }
  }, [isDarkMode])

  return (
    <>
      {/* <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/> */}
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Blogs isDarkMode={isDarkMode} />
      <ContactUs />
      {/* <Footer isDarkMode={isDarkMode}/> */}
    </>
  );
}
