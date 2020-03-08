import React from "react"

import siteMetadata from "content/settings/siteMetadata.json"
import Navbar from "./Navbar"
import SmartLink from "../SmartLink"

export default function Header() {
  return (
    <section id="page-header" className="container bg-header-0">
      <div className="hidden md:block w-full">
        <SmartLink className="p-8 flex justify-center">
          <img className="h-16" src={siteMetadata.logo} alt="logo" />
        </SmartLink>
      </div>
      <Navbar />
    </section>
  )
}
