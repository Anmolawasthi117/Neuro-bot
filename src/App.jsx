import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        {/* ... other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;