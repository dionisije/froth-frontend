import './styles/slate.bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

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
      <Outlet />
    </>
  );
}

export default App;
