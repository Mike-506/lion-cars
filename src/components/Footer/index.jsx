'use client';

import './style.css';
import Link from 'next/link';
import Image from 'next/image';
import { BsFacebook, BsGithub, BsInstagram, BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <footer>
      
      <div className='footer-grid'>

        <div className='logo grid-items'>
            <Link href='/'>
              <Image
                src="https://logos-world.net/wp-content/uploads/2021/12/Logo-Holden.png"
                width={300}
                height={200}
                alt="logo"
                className='logo-img'
              />
             <h2 className='brand'>Lion Cars</h2>
            </Link>
        </div>

        <div className='grid-items contact'>
          <ul>CONTACT US
          <Link href='tel:+506 6235-5459' target='_blank' rel='noopener noreferrer'>
          <BiSolidPhoneCall className='contact-icons'/><li>+506 6235-5459</li>
          </Link>

          <Link href='mailto:mvegar94@gmail.com' target='_blank' rel='noopener noreferrer'>
          <IoIosMail className='contact-icons' /><li>lion-cars@mail.com</li>
          </Link>
          </ul>
        </div>

        <div className='grid-items legal'>
          <ul>LEGAL
          <Link href='/privacy'>
          <li>Privacy Policy</li>
          </Link>
          <Link href='/legal'>
          <li>Terms & Conditions</li>
          </Link>
          </ul>
        </div>
        <div/>

        <div className='line'></div>

        <div className='authorRigths'>&#169; 2024 Lion Cars&#8482;</div>

        <div className="socialNet">
            <Link              
              href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' >
                <BsFacebook className='icons'/>
            </Link>

            <Link 
              href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' >
              <BsInstagram className='icons'/>
            </Link>

            <Link 
              href='https://www.linkedin.com/in/mike-506cr/' target='_blank' rel='noopener noreferrer'>
              <BsLinkedin className='icons'/>
            </Link>

            <Link               
              href='https://github.com/Mike-506' target='_blank' rel='noopener noreferrer' >
              <BsGithub className='icons'/>
            </Link>
          </div>

      </div>
      
    </footer>
  )
}

