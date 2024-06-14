'use client'

import Link from "next/link"
import './style.css'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeButton from "../ThemeButton";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [showModal, setShowModal] = useState(false);

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