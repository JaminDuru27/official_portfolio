import { motion, stagger } from "framer-motion";
import { Card } from "../components/card";
import { config } from "../config/config";
import {CgExternal} from "react-icons/cg"
import { NumberCard } from "../components/numbercard";
import { Theme } from "../components/theme";
import { BsQuote } from "react-icons/bs";
import { Nav } from "../components/nav";
import { FaCertificate } from "react-icons/fa";
import { Grid } from "../components/grid";
export function Work({theme, setTheme}){
    return(
        <Grid
        theme={theme}
        children={(
            <>
            {/* timeline */}    
            <Card
            theme={theme}
            colstart={0} colspan={4} p={16}
            rowstart={0} rowspan={12} 
            style="row-span-2 md:row-span-2 "
            children={(
                <>
                <div className="text-2xl capitalize">Time line</div>
                <div className="w-full h-fit p-2 relative overflow-y-auto scrolly flex flex-col  justify-around">
                    {config.timeline.map(({year, descr =``}, k)=>{
                        return(
                            <motion.div
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            transition={{delay: 0.4 * k}}
                            key={k}
                            className="flex z-[10] items-center justify-between text-[.7rem] gap-y-2">
                                <div className="text-[1.5rem]">{year}</div>
                                <div className="w-[60%] p-2">{descr}</div>
                            </motion.div>
                        )
                    })}
                    <svg className="svg hidden lg:block  absolute top-0 left-0 w-full h-full">
                        <line x1={`40%`} y1={`0`} x2={`40%`} y2={`100%`} stroke="white" strokeWidth={2} />
                        {config.timeline.map((e, k)=>{
                            const perc = (k/ config.timeline.length) * 100 
                            const size = 10
                            return(
                                <rect 
                                style={{
                                    transformOrigin: `center`,
                                    transformBox: `fill-box`,
                                    transform: `rotate(45deg)`
                                }}
                                y={`${perc + (100/config.timeline.length)/2}%`} x={`calc(${40}% - ${size/2}px)`} width={size} height={size} stroke="white" fill="black" />
                            )
                        })}
                    </svg>
                </div>
                </>
            )}
            />
            {/* image */}
            <Card
            theme={theme}
            colstart={5} colspan={2}
            rowstart={0} rowspan={3}
            children={(
                <>
                <img 
                className="absolute left-1/2 top-[30%] translate-[-50%]"
                src={config.watchSrc} alt="" />
                </>
            )}
            />
            {/* badges */}
            <Card
            theme={theme}
            colstart={7} colspan={6}
            rowstart={0} rowspan={3}
            children={( 
                <>
                <div className="flex p-2 h-full w-full items-center overflow-y-auto scrolly flex-wrap justify-center gap-2">
                    {
                        config.badges.map(({impressions, title, unit}, k)=>{
                            return(
                                <motion.div 
                                initial={{opacity: 0}} 
                                animate={{opacity: 1}} 
                                transition={{delay: 0.4 * k}}
                                key={k} className="border-2 sm:text-[.5rem]  p-2 w-fit h-full border-white/20 rounded-2xl">
                                    <NumberCard fontSize={2} title={title} number={impressions} unit={unit} />
                                </motion.div>
                            )
                        })
                    }
                </div>
                </>
            )}
            />
            {/* cerificates */}
            <Card
            theme={theme}
            colstart={5} colspan={5 }
            rowstart={4} rowspan={5}
            children={( 
                <>  
                <div className="w-full h-full scrolly overflow-y-auto">
                <div className="flex items-center text-[1.5rem] gap-x-4 p-2">Certificates {<FaCertificate/>}</div>
                {
                    config.certificates.map(({title, by, year, about, link},k)=>{
                        return(
                            <div 
                            key={k}
                            className="flex flex-wrap gap-2 text-[.8rem] p-2 border border-white/10 rounded-lg">
                                <div className="text-bold  capitalize p-2 border border-white/10 rounded-lg">{title}</div>
                                <div className="text-bold text-[.6rem] capitalize p-2 border border-white/10 rounded-lg opacity-[.7]">{by}</div>
                                <div className="text-bold text-[.6rem] capitalize p-2 border border-white/10 rounded-lg opacity-[.7]">{year}</div>
                                <div className="text-bold text-[.6rem] capitalize p-2 border border-white/10 rounded-lg opacity-[.7]">{year}</div>
                                <div className="text-bold text-[.6rem] capitalize p-2 border border-white/10 rounded-lg opacity-[.7]">{about}</div>
                                <a 
                                href={link}
                                target="_blank"
                                className="text-bold flex items-center justify-center  capitalize p-2 border border-white/10 rounded-lg opacity-[.7]">{<CgExternal/>}</a>
                            </div>
                        )
                    })
                }
                </div>
                </>
            )}
            />
            <Card
            theme={theme}
            colstart={10} colspan={3}
            rowstart={4} rowspan={9} p={0}
            style="row-span-2 md:row-span-2 "
            children={( 
                <>
                <div className="w-full flex scrolly overflow-y-auto p-4 flex-col gap-y-2 ">
                <div className="text-2xl capitalize">Testimonials</div>
                    {
                        config.testimonials.map(({src, name, role, comment}, k)=>{
                            return (
                                <motion.div
                                initial={{opacity: 0}} 
                                animate={{opacity: 1}} 
                                transition={{delay: 0.4 * k}}
                                key={k}
                                className="flex bg-black/10 flex-col text-[.8rem] gap-y-2  border-2 rounded-lg border-white/20 p-2">
                                    <div className="flex items-center gap-x-2">
                                        <div className="w-10 h-10 rounded-full relative border-white/20 border overflow-hidden"
                                        >
                                            <img src={src} className="absolute top-1/2 left-1/2 translate-[-50%] " alt="" />
                                        </div>
                                        <div className="capitalize">{name}</div>
                                    </div>
                                    <div className="text-[.6rem] opacity-[.7]">{role}</div>
                                    <div className="p-2 rounded-lg border border-white/20 text-[.6rem] opacity-[.7]">{comment}</div>
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
            colstart={5} colspan={3}
            rowstart={9} rowspan={3} p={0}
            children={( 
                <>
                <Theme theme={theme} setTheme={setTheme}/>
                </>
            )}
            />
            <Card
            theme={theme}
            colstart={8} colspan={2}
            rowstart={9} rowspan={3}
            children={( 
                <>
                <div className="flex flex-col items-center justify-center gap-y-2 p-4">
                    <div className="text-[1.2rem]">Download CV</div>
                    <a 
                    href={config.cvlink}
                    className="w-full flex items-end border rounded-full p-2">{<CgExternal/>}</a>
                </div>
                </>
            )}
            />
            <Card
            theme={theme}
            colstart={5} colspan={5}
            rowstart={12} rowspan={1}
            children={( 
                <>
                <div className="flex items-center justify-center w-full h-full">
                    <p className="text-[.6rem] flex items-center gap-x-1 w-full text-center">{<BsQuote/>}{config.quote.words}, <span className="uppercase opacity-[.7]">{config.quote.by}</span></p>
                </div>
                </>
            )}
            />
            </>
        )}
        />
    )
}