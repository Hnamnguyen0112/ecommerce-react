import React, { useState } from 'react'
import AfterBannerCard from '@components/AfterBannerCard'
import Banner from '@components/Banner'

function Home() {
  const [translation] = useState({
    first: {
      title: '50+ Best creative website themes & templates',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
      button: 'View Details',
    },
  })
  return (
    <div className="max-w-screen">
      <Banner />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row ">
        <AfterBannerCard translation={translation.first} />
        <AfterBannerCard translation={translation.first} />
        <AfterBannerCard translation={translation.first} />
      </div>
    </div>
  )
}

export default Home
