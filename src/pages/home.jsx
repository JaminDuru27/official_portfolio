import { MdEmail } from 'react-icons/md'
import { TiWeatherCloudy } from 'react-icons/ti'
import { WiHumidity, WiWindy } from 'react-icons/wi'
import { BiMoon, BiSun } from 'react-icons/bi'
import { CgExternal } from 'react-icons/cg'
import { motion, stagger } from 'framer-motion'
import { config } from '../config/config'
import { Card } from '../components/card'
import { useEffect, useState } from 'react'
import { getWeatherByCity } from '../utils/weather'
import { Nav } from '../components/nav'
import { NumberCard } from '../components/numbercard'
import { Theme } from '../components/theme'
import { Grid } from '../components/grid'
export function Home({theme,setTheme}){
  const [weatherData, setWeatherData] = useState(null)
  useEffect(()=>{
    getWeatherByCity((data)=>{
      setWeatherData(data)
    })
  }, [])  
  return (
      <Grid
      theme={theme} 
      children={(
        <>
      <Card
        theme={theme}
        colstart={0}rowstart={0}
        colspan={4} rowspan={4} p={16}
        children={(
          <>
          <div className="font-bold text-[1.6rem]">{config.intro.name}</div>
          <div className="text-muted text-[.8rem] ">{config.intro.bio}</div>
          </>
        )}
        />
        {/* profile image */}
        <Card
        theme={theme}
          colstart={5} rowstart={0}
          colspan={3} rowspan={4} p={0}
          children={(
            <>
            <img src={config.profilesrc} className='absolute top-1/2 left-1/2 translate-[-50%]'  />
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
          <div className="w-full h-full p-2 justify-center flex flex-wrap gap-x-4 items-center">
            {config.handles.map(({icon, fill, stroke, link}, k)=>{
              const Icon = icon
              return(
                <motion.a
                key={k}
                animate={theme === `light`?{backgroundColor: `rgba(255, 255, 255,0.2)`}:null}
                whileHover={{scale:1.06}} 
                whileTap={{scale:.9}} 
                href={link || `#`}
                target='_blank'
                className="lg:p-4 sm:p-4 cursor-pointer md:p-2 flex items-center justify-center bg-white/20 rounded-2xl border-2 border-white/10">
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
        colspan={5} rowspan={4} p={16}
        children={(
          <>
          <div className="w-full p-2 h-full absolute object-cover top-0 left-0">
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

        {/* pic */} 
        <Card
        theme={theme}
        colstart={6} rowstart={5}
        colspan={3} rowspan={4} p={0}
        children={(
          <>
          <img src={config.picsrc} className='w-full h-full absolute object-cover  top-0 left-0'  />
          </>
        )}
        />

        
        {/* yrs of work */}
        <Card
        theme={theme}
          colstart={9} rowstart={5}
          colspan={2} rowspan={4} p={16}
          children={(
            <NumberCard number={config.yearsOfExperience} title={`years experience`}/>
          )}
        />
        
        {/* about */}
        <Card
        theme={theme}
        colstart={11} rowstart={5}
        colspan={2} rowspan={4} p={16}
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
            <Theme theme={theme} setTheme={setTheme}/>
          </>
        )}
        />
        
        {/* project links */}
        <Card
        theme={theme}
        colstart={6} rowstart={9}
        colspan={7} rowspan={4} p={16}
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
        </>
      )}
      />
    )
}