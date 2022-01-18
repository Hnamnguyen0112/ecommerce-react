import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'

import Banner from '@components/Banner'
import Header from '@components/Header'
import { main } from './routes'

function App() {
  return (
    <div className="max-w-screen min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      <Banner />
      {useRoutes(main)}
    </div>
  )
}

export default App
