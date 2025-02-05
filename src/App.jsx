import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Posts from './Posts'

function App() {
return (
    <><h1>React Core Concept</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>
      <hr />
      <Posts></Posts>
     </>
  )
}

export default App
