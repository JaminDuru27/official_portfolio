import { motion } from "framer-motion"
import { BiMoon, BiSun } from "react-icons/bi"
import { useTheme } from "./useTheme";

export function Theme ({theme, setTheme, onClick=()=>{}}){
    const t = useTheme()
    return (
        <div className="w-full h-full flex items-center">
            <motion.div
            onClick={()=>{t.toggle(`dark`); setTheme(`dark`); onClick()}}
            initial={{opacity: 0}} 
            animate={theme === `dark`?{opacity: 1}: null} 
            className="w-1/2 cursor-pointer h-full flex bg-white/10  items-center justify-center"
            >{<BiMoon/>}</motion.div>
            <motion.div 
            onClick={()=>{t.toggle(`light`); setTheme(`light`); onClick()}}
            initial={{opacity: 0}} 
            animate={theme === `light`?{opacity: 1}: null} 
            className="w-1/2 cursor-pointer h-full flex bg-white/10  items-center justify-center"
            >{<BiSun/>}</motion.div>
        </div>
    )
}
