import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="min-w-screen max-h-full flex items-center p-5 lg:p-20 overflow-hidden relative my-auto">
      <div
        className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-32 text-gray-800 relative
        md:flex items-center text-center md:text-left"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-indigo-700 mb-10">404</h1>
            <p>That page doesn&apos;t exist!</p>
            <p>Sorry, the page you were looking for could not be found.</p>
          </div>
          <div className="mb-20 md:mb-0">
            <Link
              type="button"
              className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110
              text-blue-500 hover:text-blue-600"
              to="/"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20
        md:right-32 rounded-full pointer-events-none -rotate-45 transform"
      />
      <div
        className="w-96 h-full bg-indigo-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none
        -rotate-45 transform"
      />
    </div>
  )
}

export default PageNotFound
