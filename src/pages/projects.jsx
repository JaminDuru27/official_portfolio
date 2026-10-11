import { motion, stagger } from "framer-motion";
import * as cg from "react-icons/cg";
import { LuHeart } from "react-icons/lu";
import { useEffect, useState } from "react";
import { config } from "../config/config";
import { Card } from "../components/card";
import { Nav } from "../components/nav";
import { Theme } from "../components/theme";
import { Grid } from "../components/grid";

export function Projects({theme, setTheme}){
    const [currentLP, setCurrentLP] = useState(0)
    const [currentP, setCurrentP] = useState(0)
    const [r, setR] = useState(0)
    useEffect(()=>{
        let n = 0
        const interval = setInterval(()=>{
            setCurrentLP(p=>  ((p + 1) % (config.lovedProjects.length)))
        }, 8000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return (
        <Grid
        theme={theme} 
        children ={(
            <>
            <Card
                theme={theme}
                colstart={0} rowstart={0}
                colspan={3} rowspan={4} p={0}
                children={(
                    <>
                    <img 
                    className="absolute top-0 left-0 object-cover inset-0 w-full h-full"
                    src={config.productCard1.src} alt="" />
                    <motion.div 
                    className="w-full h-full relative opacity-0"
                    whileHover={{opacity: 1, display: `flex`}}
                    >
                        <motion.div 
                        animate={theme === `light`?{background:`rgba(255, 255, 255, 0.2)`}:null}
                        className="w-[80%] h-[80%] absolute rounded-lg  top-1/2 left-1/2 translate-[-50%]  translate  backdrop-blur-2xl  flex flex-col gap-y-2 bg-black/70 p-4">
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-2 scoop left-2 w-10 h-10 rounded-full bg-orange-500 z-[-1] filter-blur-2xl"></motion.div>
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-[40%] scoop left-20 w-17 h-17 rounded-full bg-purple-500 z-[-1] filter-blur-2xl"></motion.div>
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-20 scoop left-0 w-10 h-10 rounded-full bg-emerald-500 z-[-1] filter-blur-2xl"></motion.div>
                                                    
                            <div className="uppercase ">{config.productCard1.title}</div>
                            <div className="text-[.7rem]">{config.productCard1.text}</div>
                            <div className="w-full flex items-end justify-end ">
                                <a 
                                href={config.productCard1.link} target="_blank"
                                className="flex items-cennter justify-center bg-black/40 cursor-pointer rounded-full p-2"
                                ><cg.CgExternal/></a>
                            </div>
                        </motion.div>
                    </motion.div>
                    </>
                )}
            />
            <Card
                theme={theme}
                colstart={4} rowstart={0}
                colspan={5} rowspan={4} p={0}
                children={(
                    <>
                    <div className="p-2 flex z-100 items-center justify-center bg-zinc-300 w-fit absolute h-fit rounded-full top-2 right-2"
                    >{<LuHeart stroke="black"/>}</div>
                    <div className="w-full h-full ">
                        <motion.div 
                        animate={{translateX: `-${(100) * currentLP}%`}}
                        className="w-full flex h-full items-center">
                            {config.lovedProjects.map(({name, category, descr, stack, link, src}, k)=>{
                                return (
                                    <div 
                                    key={k}
                                    className="w-full h-full relative bg-black shrink-0">
                                        <img 
                                        className="w-full h-fullz-[-1]  object-cover  absolute top-0 left-0"
                                        src={src} alt="" />
                                        <div className=" absolute top-0 left-0 name z-[20] p-4 w-full h-full backdrop-blur-[2px] bg-black/50">{name}</div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-x-2 p-4 z-100 absolute bottom-0 left-0">
                        {config.lovedProjects.map((e,k)=>{
                            return(
                                <motion.div
                                animate={currentLP === k?{background: theme === `dark`?` #bab6b6`:` #0f0e0e`}:null} 
                                key={k}
                                className="w-2 h-2 border border-white/70 bg-black/40"></motion.div>
                            )
                        })}
                    </div>
                    </>
                )}
            />
            <Card
                theme={theme}
                colstart={9} rowstart={0}
                colspan={4} rowspan={12} p={0}
                children={(
                    <>
                    <motion.div 
                    animate={{translateX: `-${currentP * 100}%`}}
                    className="w-full h-full  flex items-center ">
                        {config.allProjects.map(({name, category, descr, stack, link, src},k)=>{
                            return (
                                <div 
                                onClick={()=>{
                                    const length = config.allProjects.length
                                    console.log((length - 1) - Math.abs((p % (2 * (length - 1))) - (length - 1)))
                                    setCurrentP(p=>((length - 1) - Math.abs((p % (2 * (length - 1))) - (length - 1))))
                                }}
                                key={k} className="w-full  h-full shrink-0 relative">
                                    <img src={src} 
                                    className="w-full h-full z-[-1] object-cover absolute top-0 left-0"
                                    alt="" /> 
                                    <div className="w-full backdrop-blur-[5px] p-4 bg-white/30  text-zinc-700 h-full flex flex-col  gap-y-4">
                                        <div className="text-[.8rem] lg:text-[2rem] md:text-[1rem] z-10 ">{name}</div>
                                        <div className="text-zinc-600 lg:text-[1rem] text-[.7rem] md:text-[.8rem] border flex border-2 border p-1 lg:p-2 rounded-lg justify-between items-center">{category} 
                                            <a href={link} target="_blank" className="">{<cg.CgExternal/>}</a>
                                        </div>
                                        <div className="lg:text-[1rem] text-[.6rem] md:text-[.7rem]">{descr}</div>
                                            <div className="absolute w-fit rounded-lg bottom-2 left-2  gap-x-4 flex items-center p-2 backdrop-blur overflow-hidden">
                                                {(stack || []).map((E, k    )=>{
                                                    return (
                                                        <div key={k} className="text-black"><E/></div>
                                                    )
                                                })}
                                            </div>
                                    </div>
                                </div>
                            )
                        })}
                    </motion.div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-zinc-800">
                        {
                            config.allProjects.map((_, k)=>{
                                const radius = 20
                                const total = config.allProjects.length
                                const angle  = (k / total) * (total < 7 ? 180 : 360)
                                return (
                                    <motion.div
                                    animate={{background: currentP === k?`black`:`white`}}
                                    style={{
                                        transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                                        transformOrigin: `center center`,
                                        borderRadius:20,
                                    }}
                                    key = {k}
                                    className="dor scoop w-2 h-2 absolute top-1/2 left-1/2 translate-[-50%] bg-white "
                                    >
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                    </>
                )}
            />
            <Card
                theme={theme}
                colstart={0} rowstart={5}
                colspan={5} rowspan={4}
                children={(
                    <>
                    <div className="w-full h-full p-4 flex flex-col gap-y-4">
                        <div className="">{config.labProject.title}</div>
                        <div className="text-[.6rem]">{config.labProject.description}</div>
                        <div className="flex items-center gap-x-2">
                            <a 
                            href={config.labProject.docsUrl} target="_blank"
                            className="p-2 text-[.8rem] capitalize border-2 border-white/20 rounded-lg flex items-center gap-x-2">docs {<cg.CgExternal/>}</a>
                            <a 
                            href={config.labProject.demoUrl} target="_blank"
                            className="p-2 text-[.8rem] capitalize border-2 border-white/20 rounded-lg flex items-center gap-x-2">demo {<cg.CgExternal/>}</a>
                        </div>
                    </div>
                    </>
                )}
            />
            <Card
                theme={theme}
                colstart={6} rowstart={5}
                colspan={3} rowspan={4}
                children={(
                    <>
                    <img 
                    className="absolute top-0 left-0 object-cover inset-0 w-full h-full"
                    src={config.productCard2.src} alt="" />
                    <motion.div 
                    className="w-full h-full relative opacity-0"
                    whileHover={{opacity: 1, display: `flex`}}
                    >
                        <motion.div 
                        animate={theme === `light`?{background:`rgba(255, 255, 255, 0.2)`}:null}
                        className="w-[80%] h-[80%] absolute rounded-lg  top-1/2 left-1/2 translate-[-50%]  translate  backdrop-blur-2xl  flex flex-col gap-y-2 bg-black/70 p-4">
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-2 scoop left-2 w-10 h-10 rounded-full bg-orange-500 z-[-1] filter-blur-2xl"></motion.div>
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-[40%] scoop left-20 w-17 h-17 rounded-full bg-purple-500 z-[-1] filter-blur-2xl"></motion.div>
                            <motion.div 
                            animate={{translateY: [0, 10, 0]}}
                            transition={{repeat: Infinity, duration: 10, delay:Math.random()}}
                            style={{filter: `blur(8px)`}}
                            className="absolute top-20 scoop left-0 w-10 h-10 rounded-full bg-emerald-500 z-[-1] filter-blur-2xl"></motion.div>
                                                    
                            <div className="uppercase ">{config.productCard2.title}</div>
                            <div className="text-[.7rem]">{config.productCard2.text}</div>
                            <div className="w-full flex items-end justify-end ">
                                <a 
                                href={config.productCard2.link} target="_blank"
                                className="flex items-cennter justify-center bg-black/40 cursor-pointer rounded-full p-2"
                                ><cg.CgExternal/></a>
                            </div>
                        </motion.div>
                    </motion.div>
                    </>
                )}
            />
            <Card
                theme={theme}
                colstart={0} rowstart={9}
                colspan={3} rowspan={4} p={0}
                children={(
                    <Theme theme={theme} setTheme={setTheme}/>
                )}
            />
            <Card
                theme={theme}
                colstart={4} rowstart={9}
                colspan={5} rowspan={4}
                children={(
                    <>
                    <div className="w-full h-full p-4 flex flex-col lg:gap-y-4 gap-y-2 ">
                        <div className="text-[.8rem] lg:text-[1rem]">{config.featuredProject.title}</div>
                        <div className="text-[.6rem]">{config.featuredProject.description}</div>
                        <div className="flex items-center gap-x-2">
                            <a 
                            href={config.featuredProject.docsUrl} target="_blank"
                            className="p-2 text-[.8rem] capitalize border-2 border-white/20 rounded-lg flex items-center gap-x-2">docs {<cg.CgExternal/>}</a>
                            <a 
                            href={config.featuredProject.demoUrl} target="_blank"
                            className="p-2 text-[.8rem] capitalize border-2 border-white/20 rounded-lg flex items-center gap-x-2">demo {<cg.CgExternal/>}</a>
                        </div>
                    </div>
                    </>
                )}
            />
            </>
        )}
        />
        
    )
}