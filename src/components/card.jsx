import { motion } from "framer-motion"

export function Card({theme,children, colspan, rowspan, p=4, colstart, rowstart, style=``}){
    return (
    <motion.div 
    variants={{
        hidden: {opacity: 0, y: 20, scale: 0.9},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease:`easeInOut`}}
    }}
    animate={theme === `light`? {backgroundColor: `rgba(255,255,255,0.1)`, boxShadow:`none`, color: `rgba(0,0,0,0.8)`}:null}
    style={{boxShadow:`0px 0px 8px 0px #00000059`}}
    className={`col-start-${colstart} relative row-start-${rowstart} col-span-${colspan} row-span-${rowspan} p-${p} bg-zinc-800/20 overflow-hidden border-1 border-white/10 flex gap-4 flex-col rounded-2xl  backdrop-blur-2xl ${style}`}
    >
      {children}
    </motion.div>
  )
}
