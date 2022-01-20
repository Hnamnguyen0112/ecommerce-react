import React from 'react'
import Home from '@pages/Home'
import { Navigate } from 'react-router-dom'
import PageNotFound from '@pages/PageNotFound'

export const main = [
  { path: '/', element: <Home /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <Navigate to="/404" /> },
]
