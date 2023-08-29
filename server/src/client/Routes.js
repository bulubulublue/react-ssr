import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}
