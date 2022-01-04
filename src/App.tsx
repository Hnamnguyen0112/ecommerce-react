import React, { useEffect } from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/helpers'
import { success } from '@features/common/message/message.slices'
import Header from './components/Header'
import { main } from './routes'

function App() {
  const dispatch = useAppDispatch()
  const message = useAppSelector((state) => state.message)

  useEffect(() => {
    dispatch(success({ data: 'abc' }))
  }, [])

  useEffect(() => {
    console.log(message)
  }, [message])

  return (
    <div className="bg-white flex flex-col font-sans">
      <div className="container mx-auto px-8">
        <Header />
        <button type="button">
          <Link to="/">{message.data}</Link>
        </button>
        {useRoutes(main)}

      </div>
    </div>
  )
}

export default App
