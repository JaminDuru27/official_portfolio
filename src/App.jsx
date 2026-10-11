import { useEffect, useState } from 'react'
import './App.css'
import { config } from './config/config'
import { motion, stagger } from 'framer-motion'

import { Home } from './pages/home'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Work } from './pages/work'
import { Projects } from './pages/projects'
import { Contacts } from './pages/contacts'
import { Nav } from './components/nav'


function App() {
  const [theme, setTheme] = useState(`dark`)
  return (
    <div className="bg-black  text-white overflow-y-auto scrolly ">
      <img 
      className='fixed w-full h-full top-0  left-0'
      src={config.backgroundSrc} alt="" />
        
        <motion.div 
        animate={theme === `light`? {backgroundColor: `rgba(60, 60, 60, 0.26)`}:null}
        className="bg-black/90 fixed w-full h-full top-0  left-0 overflow-hidden"></motion.div>      

          <BrowserRouter>
            <Routes>
              <Route path='/'element={<Home theme={theme} setTheme={setTheme}/>}/>
              <Route path='/work'element={<Work theme={theme} setTheme={setTheme}/>}/>
              <Route path='/projects' element={<Projects theme={theme} setTheme={setTheme}/>}/>
              <Route path='/contact' element={<Contacts theme={theme} setTheme={setTheme}/>}/>
            </Routes>
          </BrowserRouter>
        
    </div>
  )
}

export default App
