import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginCard from './Components/GithubLoginCard/LoginCard'
import GithubLogin from './Components/GithubLogin/GithubLogin'
import WebhookCard from './Components/WebhookCard/WebhookCard'
import Dashboard from './Dashboard/Dashboard'
import PRCard from './Components/PRCard'
import Header from './Components/Header'
import PRStatusDistributionGraph from './Components/Graph/PRStatusDistributionGraph'
import TeamPerformance from './Components/Graph/TeamPerformance'
import PRInfo from './Components/PRInfo'
import RecentActivities from './Components/RecentActivities'
function App() {

  return (
    <>
      {/* <LoginCard /> */}
      {/* <GithubLogin /> */}
      {/* <WebhookCard /> */}
      <Dashboard />
      {/* <PRCard /> */}
      {/* <Header /> */}
      {/* <PRStatusDistributionGraph /> */}
      {/* <TeamPerformance /> */}
      {/* <PRInfo /> */}
      {/* <RecentActivities /> */}
    </>
  )
}

export default App
