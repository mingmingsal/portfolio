import { useState } from 'react'
import './App.css'
import Parallax from './components/Parallax'

function App() {
  getScrollPosition()
  return (
    <Parallax/>
  )
}

export default App
