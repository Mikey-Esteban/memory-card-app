import React from 'react'

const Banner = ({currentScore, bestScore, feedback, feedbackSpacing }) => {
  return (
    <div className="max-w-lg mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-red-300 leading-tight">
          Memory Card Game!
        </h1>
        <p className="text-sm text-gray-500 leading-normal mb-3">
          keep clicking on images you haven't seen
        </p>
        <div className='flex justify-around'>
          <span className='text-gray-700'>Current score: {currentScore} </span>
          <span className='text-gray-700'>Best score: {bestScore} </span>
        </div>
        <p className={`text-lg font-bold text-blue-900 leading-normal my-3 ${feedbackSpacing} fancy-transition`}>
          {feedback}
        </p>
      </div>
    </div>
  )
}

export default Banner
