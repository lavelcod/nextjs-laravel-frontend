"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

function Menu() {
  const pathName = usePathname();
  // console.log(pathName)
  const [fixedHeader, setFixedHeader] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <>
      <div className={`header-menu bg-white  ${fixedHeader ? "fixed" : ""}`}>
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block" href="/">
            <Image
              className="w-[149px] max-sm:w-[132px]"
              src={`/images/logo.png`}
              width={2000}
              height={1000}
              alt="logo"
              priority={true}
            />
          </Link>
          <div className="menu-center-block h-full">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/about" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/about"
                >
                  <span>About us</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/service" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/service"
                >
                  <span>Our Services</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/case-studies" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/case-studies"
                >
                  <span>Case Studies</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/blog" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/blog"
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li
                className={`nav-item h-full flex items-center justify-center home ${
                  pathName === "/contact" ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link text-title flex items-center gap-1"
                  href="/contact"
                >
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <div className="icon-phone-call text-4xl">
                <i></i>
              </div>
            </div>
            <div className="ml-3 text ">
              <div className="text caption1">free Consultancy</div>
              <div className="number text-button">+123 456 789</div>
            </div>
            <div className="menu-humburger hidden pointer" onClick={() => setOpenMobileMenu(!openMobileMenu)}>
              <Icon.List className="text-2xl" weight="bold" />
            </div>
          </div>
        </div>
        <div id="menu-mobile-block " className={`${openMobileMenu && "open"}`}>
          <div className="menu-mobile-main">
            <div className="container">
              <ul>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
