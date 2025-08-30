"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

function Menu() {
  const pathName = usePathname()
  // console.log(pathName)
  const [fixedHeader, setFixedHeader]= useState(false)
  return (
    <>
      <div className={`header-menu bg-white  ${fixedHeader? "fixed" : ""}`}>
        <div className="container flex items-center justify-between h-20">
          <Link className='menu-left-block' href="/">
            <Image className="w-[149px] max-sm:w-[132px]" src={`/images/logo.png`} width={2000} height={1000} alt="logo" priority={true}/>
          </Link>
          <div className='menu-center-block h-full'>
            <ul className='menu-nav flex items-center xl:gap-2 h-full'>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/"><span>Home</span></Link>
              </li>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/about" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/about"><span>About us</span></Link>
              </li>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/service" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/service"><span>Our Services</span></Link>
              </li>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/case-studies" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/case-studies"><span>Case Studies</span></Link>
              </li>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/blog" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/blog"><span>Blog</span></Link>
              </li>
              <li className={`nav-item h-full flex items-center justify-center home ${pathName === "/contact" ? "active" : ""}`}>
                <Link className='nav-link text-title flex items-center gap-1' href="/contact"><span>Contact us</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu