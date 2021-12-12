import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import LineAnimation from './components/LineAnimation';
import LoadingAnimation from './components/LoadingAnimation';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/notification" element={<LineAnimation />} />
            <Route path="/loading" element={<LoadingAnimation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
