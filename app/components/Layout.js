'use client';

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wheader from "./page-components/WaComp";
import { useRouter } from "next/navigation";
const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter()
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (router.pathname && router.pathname.startsWith('/admin')) {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  }, []); // Run when pathname changes

  if (hideNavbar) {
    return null; // Don't render Navbar if on admin pages
  }
  return (
    <>
      {!hideNavbar && <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
      <Wheader />
      <main>{children}</main>
      {!hideNavbar && <Footer isDarkMode={isDarkMode} />}
    </>
  );
};

export default Layout;
