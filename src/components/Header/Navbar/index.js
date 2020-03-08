import React, { useState } from "react"

import menu from "content/settings/menu.json"
import siteMetadata from "content/settings/siteMetadata.json"

import SmartLink from "~/components/SmartLink"

import BurgerMenu from "./BurgerMenu"

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  function toggleNavbar() {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <div className="bg-header-0 border-b-2 border-brand-4 md:flex md:justify-between md:items-center">
      <div className="p-3 flex items-center justify-between md:hidden">
        <BurgerMenu toggleNavbar={toggleNavbar} navbarOpen={navbarOpen} />
        <div>
          <SmartLink>
            <img
              className="h-10"
              src={siteMetadata.logo}
              alt={siteMetadata.title}
            />
          </SmartLink>
        </div>
        <div className="w-8"></div>
      </div>
      <nav
        className={`${
          navbarOpen ? "block" : "hidden"
        } font-serif bg-gray-200 w-full text-header-4 text-center md:text-2xl md:block`}
      >
        <ul className="bg-header-0 flex flex-col flex-wrap md:flex-row md:justify-center">
          {menu.links.map(link => (
            <li className="" key={link.label}>
              <SmartLink
                className="px-4 py-2 block border-brand-0 hover:bg-brand-4"
                activeClassName="text-brand-0 bg-gray-100"
                to={link.url}
              >
                {link.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
