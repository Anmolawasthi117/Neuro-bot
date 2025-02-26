import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinUs from './pages/JoinUs';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join-us" element={<JoinUs/>}/>
        {/* ... other routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;