import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './pages/Education';
import Semulator from './pages/Semulator';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/educational" element={<Education/>}/>
        <Route path="/simulator" element={<Semulator/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;