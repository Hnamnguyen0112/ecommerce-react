import React from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import Header from './components/Header'
import PageNotFound from './pages/PageNotFound'

function App() {
  const pageNotFound = {
    path: '/404',
    element: <PageNotFound />,
  }
  return (
    <div className="bg-white flex flex-col font-sans">
      <div className="container mx-auto px-8">
        <Header />
        {useRoutes([pageNotFound])}
        <button type="button">
          <Link to="/404">Not Found Page</Link>
        </button>
      </div>
    </div>
  )
}

export default App
