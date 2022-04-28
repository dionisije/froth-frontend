// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/slate.bootstrap.min.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './routes/About/About';
import Albums from './routes/Albums/Albums';
import Facts from './routes/Facts/Facts';

function App() {
  return (
    <>
      <div className='container'>
        <nav className='navbar navbar-dark bg-dark navbar-expand'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'><Link to="/albums" className='nav-link'>Albums</Link></li>
              <li className='navbar-item'><Link to="/facts" className='nav-link'>Facts</Link></li>
              <li className='navbar-item'><Link to="/about" className='nav-link'>About</Link></li>
            </ul>
          </div>
        </nav>
        <p>Albums text here just for testing</p>
      </div>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="albums" element={<Albums />} />
        <Route path="facts" element={<Facts />} />
        <Route path="about" element={<About />} />
      </Routes>
      </>
  );
}

export default App;
