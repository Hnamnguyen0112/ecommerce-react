import React from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import { main } from './routes'

function App() {
  return (
    <div className="bg-white flex flex-col font-sans">
      <div className="container mx-auto px-8">
        <Header />
        <button type="button">
          <Link to="/">Not Found Page</Link>
        </button>
        {useRoutes(main)}

      </div>
    </div>
  )
}

export default App
