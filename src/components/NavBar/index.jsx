'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link"
import Image from "next/image";
import './style.css'
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeButton from "../ThemeButton";


const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Navbar scroll behavior
  useEffect(() => {
    const navbar = document.querySelector(".nav-container");
    let lastScrollTop = 0;
    let isHovering = false;
    let shouldHideNavbar = false;

    const onScroll = () => {
      var currentScroll = window.scrollY || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop && currentScroll > 50){
        // Scroll down
        if(!isHovering) {
          navbar.style.top = "-130px";
        } else {
          shouldHideNavbar = true;
        }
      } else {
        // Scroll up
        navbar.style.top = "0px";
        setTimeout(() => {
          if(window.scrollY || document.documentElement.scrollTop > 0){
            if(!isHovering) {
              navbar.style.top = "-130px";
            } else {
              shouldHideNavbar = true;
            }
          }
        }, 3000);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For mobiles or browsers that allow overscroll
    };

    window.addEventListener("scroll", onScroll);

    navbar.addEventListener("mouseenter", function() {
      isHovering = true;
    });

    navbar.addEventListener("mouseleave", function() {
      isHovering = false;
      if(shouldHideNavbar) {
        navbar.style.top = "-130px";
        shouldHideNavbar = false;
      }
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);  


  // Modal Logic
  const openModal = () => {
    setNav(!nav);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return(
  <nav>
  <div className="nav-container flex justify-between items-center w-full text-white">
    <div className="logo-nav">
      <Link href='/'>
        <Image
          src="https://logos-world.net/wp-content/uploads/2021/12/Logo-Holden.png"
          width={300}
          height={200}
          alt="logo"
          className='logo-img'
        />
        
        Lion Cars
      </Link>
    </div>

    <ul className="nav hidden sm:flex">

      <li>
        <Link aria-disabled='true' href='/'>Home</Link>
      </li>
      <li>
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>

    </ul>

  <div
  onClick={openModal}
  className="cursor-pointer z-10 sm:hidden"
  >
  {!nav && !showModal ? <FaBars className="bars" /> :
  <div className="overlay" onClick={closeModal}> 
  <ul className="nav-links">
    
      <li>
        <FaTimes className="exit" onClick={closeModal} />
      </li>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li className="about">
        <Link href='/about'>About</Link>
      </li>
      <li>
        <Link href='/contact'>Contact</Link>
      </li>
    </ul>
  </div>

   }
  </div>


    <ThemeButton/>
  
  </div>
</nav>
)
}

export default NavBar;