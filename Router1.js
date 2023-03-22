import {BrowserRouter,Routes,Route,Link, NavLink} from 'react-router-dom';
import Home from './Home';
import About from './About';
function App() {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>JobArouter</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
    <main>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
