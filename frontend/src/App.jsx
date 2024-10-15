import LoginCard from '@/components/GithubLoginCard/LoginCard';
import WebhookCard from '@/components/WebhookCard/WebhookCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function OAuthSuccess() {
  return <WebhookCard />; // Or handle the token and logic here
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/auth/github/success" element={<OAuthSuccess />} />
        <Route path="/webhook" element={<WebhookCard />} />
        <Route path="/login" element={<LoginCard />} />
      </Routes>
    </Router>
  );
}

export default App;
