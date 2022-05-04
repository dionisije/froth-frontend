import './styles/slate.bootstrap.min.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='container'>
        <nav className='navbar navbar-dark bg-dark navbar-expand'>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
              <li className='navbar-item'><NavLink to="/albums" className='nav-link'>Albums</NavLink></li>
              <li className='navbar-item'><NavLink to="/facts" className='nav-link'>Facts</NavLink></li>
              <li className='navbar-item'><NavLink to="/about" className='nav-link'>About</NavLink></li>
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
