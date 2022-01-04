import React, { useEffect } from 'react'
import './App.css'
import { Link, useRoutes } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/helpers'
import { success } from '@features/common/message/message.slices'
import { useTranslation } from 'react-i18next'

import Header from './components/Header'
import { main } from './routes'

function App() {
  const dispatch = useAppDispatch()
  const message = useAppSelector((state) => state.message)
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    i18n.changeLanguage('de')
  }

  useEffect(() => {
    dispatch(success({ data: 'abc' }))
  }, [])

  return (
    <div className="bg-white flex flex-col font-sans">
      <div className="container mx-auto px-8">
        <Header />
        <p>{t('greeting')}</p>
        <button type="button">
          <Link to="/">{message.data}</Link>
        </button>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleChangeLanguage}
        >
          Change to German
        </button>
        {useRoutes(main)}
      </div>
    </div>
  )
}

export default App
