import { LuAward, LuBriefcase, LuLayers, LuMail } from 'react-icons/lu'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export function Nav({theme}){
    const nav = useNavigate()
    return (
        <motion.div
        className="fixed top-1/2  backdrop-blur-2xl  translate-x-[50%]  z-40 left-4 translate-y-[-50%] p-2  gap-y-2 rounded-lg flex flex-col gap-y-2">
            <div 
            onClick={()=>{nav(`/`)}}
            className="w-8 h-8 rounded nav full  cursor-pointer flex items-center justify-center text-[1.2rem]">{<FaHome color='var(--text)'/>}</div>
            <div 
            onClick={()=>{nav(`/work`)}}
            className="w-8 h-8 rounded nav full  cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuBriefcase color='var(--text)'/>}</div>
            <div 
            onClick={()=>{nav(`/projects`)}}
            className="w-8 h-8 rounded nav full  cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuLayers color='var(--text)'/>}</div>
            <div 
            onClick={()=>{nav(`/contact`)}}
            className="w-8 h-8 rounded nav full  cursor-pointer flex items-center justify-center text-[1.2rem]">{<LuMail color='var(--text)'/>}</div>
        </motion.div>
    )
}