//App.js

import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Home from './Home';
import About from './About';
import RootLayout from './layouts/RootLayout';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <RouterProvider router ={router}/>
  );
}

export default App
 

//Folder layouts:->RootLayout==============>


import {NavLink,Outlet} from 'react-router-dom';
export default function RootLayout(){
    return(<header>
        <nav>
          <h1>JobArouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
        <main>
            <Outlet/>
        </main>
      </header>
      );
}
