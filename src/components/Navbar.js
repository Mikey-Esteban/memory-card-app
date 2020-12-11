import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a href="/home" className="text-lg no-underline text-gray-700 hover:text-blue-dark">Code on Github</a>
      </div>
      <div>
        <Button />
      </div>
    </nav>
  )
}

export default Navbar
