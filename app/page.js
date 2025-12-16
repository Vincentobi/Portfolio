'use client';
import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";


export default function Home() {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    if(isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }, [isDarkMode])

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode}/>
      <Skills isDarkMode={isDarkMode}/>
      <Work isDarkMode={isDarkMode}/>
      <Contact isDarkMode={isDarkMode}/>
      <Footer isDarkMode={isDarkMode}/>
    </>
  );
}
