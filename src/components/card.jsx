import { motion } from "framer-motion"

export function Card({theme,children, colspan, rowspan, p=4, colstart, rowstart, style=``}){
  return (
    <motion.div 
    variants={{
        hidden: {opacity: 0, y: 20, scale: 0.9},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease:`easeInOut`}}
    }}
    animate={theme === `light`
      ?{backgroundColor: `rgba(0,0,0,0.1)`, boxShadow:`none`, borderColor: `rgba(0,0,0,.1)`, color: `rgba(0,0,0,0.8)`}
      :{backgroundColor: `rgba(255,255,255,0.1)`, boxShadow:`none`, borderColor: `rgba(255,255,255,.1)`, color: `rgba(255,255,255,0.8)`}}
    style={{
      boxShadow:`0px 0px 8px 0px #00000059`,
      padding: p,
      gridColumnStart: colstart,
      gridColumnEnd: colspan ? `span ${colspan}`:null,
      gridRowStart: rowstart ,
      gridRowEnd: rowspan ? `span ${rowspan}`:null,
    }}
    className={`col-start-${colstart} relative row-start-${rowstart} col-span-${colspan} row-span-${rowspan} p-${p}  overflow-hidden border-1  flex gap-4 flex-col rounded-2xl  backdrop-blur-2xl ${style}`}
    >
      {children}
    </motion.div>
  )
}
