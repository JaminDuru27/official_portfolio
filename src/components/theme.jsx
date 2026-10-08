import { motion } from "framer-motion"
import { BiMoon, BiSun } from "react-icons/bi"

export function Theme ({theme, setTheme}){
    return (
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
    )
}
