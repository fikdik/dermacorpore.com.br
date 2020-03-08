import React from "react"

export default function PageHeader({ children }) {
  return (
    <div className="container md:py-8">
      <div className="md:flex justify-center">
        <div className="text-xl text-center text-white uppercase px-12 py-2 bg-brand-1 md:rounded md:text-3xl">
          {children}
        </div>
      </div>
    </div>
  )
}
