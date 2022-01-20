import React from 'react'
import './App.css'
import { useRoutes } from 'react-router-dom'

import Header from '@components/Header'
import { main } from './routes'

function App() {
  return (
    <div className="max-w-screen min-h-screen bg-blue-100 flex flex-col p-0">
      <Header />
      {useRoutes(main)}
    </div>
  )
}

export default App
