import LoginCard from '@/components/GithubLoginCard/LoginCard';
import WebhookCard from '@/components/WebhookCard/WebhookCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginCard />} /> */}
        
        <Route path="/webhook" element={<WebhookCard />} />
        {/* <Route path="/login" element={<LoginCard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
