import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginCard from './Components/GithubLoginCard/LoginCard'
import GithubLogin from './Components/GithubLogin/GithubLogin'
import WebhookCard from './Components/WebhookCard/WebhookCard'
import Dashboard from './Dashboard/Dashboard'
function App() {
  

  return (
    <>
      {/* <LoginCard /> */}
      {/* <GithubLogin /> */}
      {/* <WebhookCard /> */}
      <Dashboard />
    </>
  )
}

export default App
