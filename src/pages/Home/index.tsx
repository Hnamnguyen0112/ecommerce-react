import React, { useState } from 'react'
import AfterBannerCard from '@components/AfterBannerCard'

function Home() {
  const [translation] = useState({
    first: {
      title: '50+ Best creative website themes & templates',
      description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. Lorem consectetur adipiscing elit.',
      button: 'View Details',
    },
  })
  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row lg:gap-x-8">
      <AfterBannerCard translation={translation.first} />
      <AfterBannerCard translation={translation.first} />
      <AfterBannerCard translation={translation.first} />
    </div>
  )
}

export default Home
