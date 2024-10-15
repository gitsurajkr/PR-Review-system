// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCard from '@/components/GithubLoginCard/LoginCard';
import WebhookCard from '@/components/WebhookCard/WebhookCard';
import Dashboard from './Page/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/webhook" element={<WebhookCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
