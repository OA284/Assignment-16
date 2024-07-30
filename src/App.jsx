import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import StartFW from './Component/StartFW/StartFW';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';

function App() {

  const Application = createBrowserRouter([
    {path:"/", element:<Layout/>, children:[
      {path:"/", element:<StartFW />},
      {path:"/About", element:<About />},
      {path:"/Portfolio", element:<Portfolio />},
      {path:"/Contact", element:<Contact />}
    ]}
  ]);

  return (
    <>
      <RouterProvider router={Application}/>
    </>
  )
}
export default App