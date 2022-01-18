import React from 'react'
import BannerImage from '@assets/image/banner.jpg'

function Banner() {
  return (
    <div
      className="bg-cover bg-center h-[30rem] text-white py-24 px-10 object-fill"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="md:w-1/2">
        <p className="font-bold text-md uppercase">Services</p>
        <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">Multimedia products</p>
        <p className="text-3xl mb-10 leading-none">Atractive designs for your brand</p>
        <a href="#!" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-sm rounded hover:bg-gray-200 hover:text-gray-800">Learn more</a>
      </div>
    </div>
  )
}

export default Banner
