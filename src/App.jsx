import { useEffect, useState } from 'react'
import './App.css'
import { config } from './config/config'
import { motion, stagger } from 'framer-motion'

import { Home } from './pages/home'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { Work } from './pages/work'

function App() {
  const [theme, setTheme] = useState(`dark`)
  return (
    <div className="bg-black  text-white ]">
      <img 
      className='absolute w-full h-full top-0  left-0'
      src={config.backgroundSrc} alt="" />

        <motion.div 
        animate={theme === `light`? {backgroundColor: `rgba(255,255,255,0.4)`}:null}
        className="bg-black/90 absolute w-full h-full top-0  left-0"></motion.div>      

          <BrowserRouter>
            <Routes>
              <Route path='/'element={<Home theme={theme} setTheme={setTheme}/>}/>
              <Route path='/work'element={<Work theme={theme} setTheme={setTheme}/>}/>
            </Routes>
          </BrowserRouter>
        
    </div>
  )
}

export default App
