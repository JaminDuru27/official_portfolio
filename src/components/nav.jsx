import { LuAward, LuBriefcase, LuLayers, LuMail } from 'react-icons/lu'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Nav({theme}){
    const nav = useNavigate()
    return (
        <motion.div
        animate={theme === `light`? {color: `rgba(0,0,0,0.8)`}:null}
        className="absolute top-1/2 backdrop-blur-2xl translate-x-[-200%] z-40 left-4 translate-y-[-50%] p-2  gap-y-2 rounded-lg flex flex-col gap-y-2">
            <div 
            onClick={()=>{nav(`/`)}}
            className="w-8 h-8 rounded full bg-white/10 cursor-pointer flex items-center justify-center text-[1.2rem]">{<FaHome/>}</div>
            <div 
            onClick={()=>{nav(`/work`)}}
            className="w-8 h-8 rounded full bg-white/10 cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuBriefcase/>}</div>
            <div 
            onClick={()=>{nav(`/projects`)}}
            className="w-8 h-8 rounded full bg-white/10 cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuLayers/>}</div>
            <div 
            onClick={()=>{nav(`/contact`)}}
            className="w-8 h-8 rounded full bg-white/10 cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuMail/>}</div>
        </motion.div>
    )
}