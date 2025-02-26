import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import JoinUs from './pages/JoinUs';
import Education from './pages/Education';
import Portal from './pages/Portal';
import Semulator from './pages/Semulator';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join-us" element={<JoinUs/>}/>
        <Route path="/educational" element={<Education/>}/>
        <Route path="/portal" element={<Portal/>}/>
        <Route path="/simulator" element={<Semulator/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;