import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UsersList from './components/UsersList'

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/users" element={<UsersList />} />
    </Routes>
  )
}
