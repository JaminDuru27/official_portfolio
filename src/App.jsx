import { useEffect, useState } from 'react'
import './App.css'
import { config } from './config/config'
import { motion, stagger } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'
import { Card } from './components/card'
import { WiHumidity, WiWindy } from 'react-icons/wi'
import { BiMoon, BiSun } from 'react-icons/bi'
import { CgExternal } from 'react-icons/cg'
import { getWeatherByCity } from './utils/weather'

function App() {
  const [theme, setTheme] = useState(`dark`)
  const [weatherData, setWeatherData] = useState(null)
  useEffect(()=>{
    getWeatherByCity((data)=>{
      setWeatherData(data)
    })
  }, [])
  return (
    <div className="bg-black  text-white ">
      <img 
      className='absolute w-full h-full top-0  left-0'
      src={config.backgroundSrc} alt="" />

      <motion.div 
      animate={theme === `light`? {backgroundColor: `rgba(255,255,255,0.4)`}:null}
      className="bg-black/90 absolute w-full h-full top-0  left-0"></motion.div>
      <div className="w-[80vw] h-[90vh]  z-20 absolute top-1/2 p-4 left-1/2 translate-[-50%] ">
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity:1,transition: {delayChildren:stagger(0.3)}}
        }}
        className="grid gap-4 grid-cols-12  grid-rows-12 w-full h-full">
          {/* intro */}
         
          <Card
          theme={theme}
          colstart={0}rowstart={0}
          colspan={4}rowspan={4} p={8}
          children={(
            <>
            <div className="text-bold text-[1.6rem]">{config.intro.name}</div>
            <div className="text-bold text-[.8rem] ">{config.intro.bio}</div>
            </>
          )}
          />
          {/* pic */} 
          <Card
          theme={theme}
          colstart={5} rowstart={0}
          colspan={3} rowspan={4} p={0}
          children={(
            <>
            <img src={config.picsrc} className='w-full h-full'  />
            </>
          )}
          />
          {/* narquee */}
          <Card
          theme={theme}
          colstart={8} rowstart={0}
          colspan={5} rowspan={2} p={2} 
          children={(
            <>
            <marquee 
            className="flex w-full h-full flex-shrink-0 flex-row items-center gap-2"
            behavior="scroll" direction="ltr">
              <div className="w-full h-full items-center flex  gap-x-4">
                <div className="">I work with</div>
                {[...config.tech].map(({icon, fill, stroke}, k)=>{
                  let E = icon
                  return(
                    <motion.div 
                    animate={theme === `light`?{backgroundColor: `rgba(0,0,0,0.2)`}:null}
                    key={k}
                    className="p-2  bg-white/10 rounded-lg">{<E fill={fill} stroke={stroke}/>}</motion.div>
                  )
                })}
              </div>
            </marquee>
            </>
          )}
          />
          <Card
          theme={theme}
          colstart={8} rowstart={0}
          colspan={5} rowspan={2} p={0}
          children={(
            <>
            <div className="w-full h-full p-2 justify-center flex gap-x-4 items-center">
              {config.handles.map(({icon, fill, stroke, link}, k)=>{
                const Icon = icon
                return(
                  <motion.a
                  animate={theme === `light`?{backgroundColor: `rgba(255, 255, 255,0.2)`}:null}
                  whileHover={{scale:1.06}} 
                  whileTap={{scale:.9}} 
                  href={link || `#`}
                  target='_blank'
                  className="p-4 cursor-pointer flex items-center justify-center bg-white/20 rounded-2xl border-2 border-white/10">
                    <Icon fill={theme ===`light`?`rgba(0,0,0,.7)`:`rgba(255,255,255,.7)`}/>
                  </motion.a>
                )
              })}
            </div>
            </>
          )}
          />

          {/* weather or pic */}
          <Card
          theme={theme}
          colstart={1} rowstart={5}
          colspan={5} rowspan={4} p={4}
          children={(
            <>
            <div className="w-full h-full flex flex-col justify-center">
              <img 
              src={config.weatherSrc} 
              className='w-full h-full absolute top-0 left-0' 
              alt="" />
              {weatherData ? (
                <div className="flex z-20 flex-col gap-y-2 justify-center">
                  <div className="bg-white/10 backdrop-blur-2xl p-2 flex items-center gap-y-2 text-[2rem] font-bold rounded-full"
                  >{<TiWeatherCloudy className='text-[4rem]'/>} {weatherData?.current?.temperature_2m} {weatherData?.current_units?.temperature_2m}</div>
                  <div className="p-2 rounded-full bg-white/10 w-fit backdrop-blur-2xl flex items-center gap-x-2"
                  >{<WiHumidity/>}{weatherData?.current?.relative_humidity_2m} {weatherData?.current_units?.relative_humidity_2m}</div>
                  <div className="p-2 rounded-full bg-white/10 w-fit backdrop-blur-2xl flex items-center gap-x-2"
                  >{<WiWindy/>}{weatherData?.current?.wind_speed_10m} {weatherData?.current_units?.wind_speed_10m}</div>
                </div>
              ):null}
            </div>
            </>
          )}
          />

          {/* profile image */}
          <Card
          theme={theme}
            colstart={6} rowstart={5}
            colspan={3} rowspan={4} p={0}
            children={(
              <>
              <img src={config.profilesrc} className='absolute top-1/2 left-1/2 translate-[-50%]'  />
              </>
            )}
          />
          
          {/* yrs of work */}
          <Card
          theme={theme}
            colstart={9} rowstart={5}
            colspan={2} rowspan={4} p={4}
            children={(
              <>
              <div className="w-full h-full flex flex-col relative gap-4">
                <div className="w-full h-20 overflow-hidden relative ">
                  <motion.div 
                  initial={{translateY: `0`}}
                  animate={{translateY: `-${config.yearsOfExperience * 5}rem`}}
                  transition={{duration:2}}
                  className="flex flex-col  items-center   transition-transform duration-500 ease-out leading-none  text-center">{
                    Array.from({length:config.yearsOfExperience + 1}).map((_, i)=>{
                      return(
                        <div key={i} 
                        className="h-20 flex items-center shrink-0 justify-center text-[5rem] font-extrabold tracking-lighter"
                        >{i}</div>
                      )
                    })  
                  }</motion.div>
                </div>
                <div className="w-full text-center px-2 uppercase">yrs</div>
              </div>
              </>
            )}
          />
          
          {/* about */}
          <Card
          theme={theme}
          colstart={11} rowstart={5}
          colspan={2} rowspan={4} p={4}
          children={(
            <>
            <div className="w-full h-full flex flex-col gap-4">
              <div className="capitalize text-[1.2rem] uppercase opacity-[.7]">About</div>
              <div className="text-[.8rem]">{config.about}</div>
            </div>
            </>
          )}
          />
          
          {/* email */}
          <Card
          theme={theme}
          colstart={1} rowstart={9}
          colspan={2} rowspan={4} p={0}
          children={(
            <>
            <a 
            href={`mailto:${config.email}`}
            className="flex cursor-pointer items-center justify-center w-full h-full">
              <div className="flex items-center justify-center p-4 bg-white/10 rounded-full border-2 border-inset border-white/20">
                {<MdEmail className='text-[3.4rem]'/>}
              </div>
            </a>
            </>
          )}
          />
          
          {/* dark white theme */}
          <Card
          theme={theme}
          colstart={3} rowstart={9}
          colspan={3} rowspan={4} p={0}
          children={(
            <>
              <div className="w-full h-full flex items-center">
                <motion.div
                onClick={()=>{setTheme(`dark`)}}
                initial={{opacity: 0}} 
                animate={theme === `dark`?{opacity: 1}: null} 
                className="w-1/2 cursor-pointer h-full flex bg-white/10  items-center justify-center"
                >{<BiMoon/>}</motion.div>
                <motion.div 
                onClick={()=>{setTheme(`light`)}}
                initial={{opacity: 0}} 
                animate={theme === `light`?{opacity: 1}: null} 
                className="w-1/2 cursor-pointer h-full flex bg-white/10  items-center justify-center"
                >{<BiSun/>}</motion.div>
              </div>
            </>
          )}
          />
          
          {/* project links */}
          <Card
          theme={theme}
          colstart={6} rowstart={9}
          colspan={7} rowspan={4} p={4}
          children={(
            <>
            <div className="w-full h-full flex flex-col gap-y-2 justify-center">
              <div className="uppercase opacity-[.7] text-[1.2rem]">projects</div>
              {
                config.projects.map(({name, link},k)=>{
                  return(
                    <div 
                    key={k}
                    className="w-full flex text-[.8rem] justify-between items-center border border-white/20 p-2 rounded-full">
                      <div className=" ">{name}</div>
                      <a href={link} target='_blank' className="">{<CgExternal/>}</a>
                    </div>
                  )
                })
              }
            </div>
            </>
          )}
          />
          
        </motion.div>
      </div>
    </div>
  )
}

export default App
