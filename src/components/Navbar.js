import React from 'react'

const Navbar = ({resetGame}) => {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a href="https://github.com/Mikey-Esteban/memory-card-app" className="text-lg no-underline text-gray-500 hover:text-blue-900">Github code</a>
        <a href="https://www.theodinproject.com/courses/javascript/lessons/memory-card" className="text-lg no-underline text-gray-500 hover:text-blue-900"> | Project from TOP</a>
      </div>
      <div>
        <button className="bg-transparent hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
          onClick={resetGame}>
            Reset Game
        </button>
      </div>
    </nav>
  )
}

export default Navbar
