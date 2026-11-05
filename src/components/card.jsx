import { motion } from "framer-motion"

export function Card({theme,children, colspan, rowspan, p=4, colstart, rowstart, style=``}){
  return (
    <motion.div 
    variants={{
        hidden: {opacity: 0, y: 20, scale: 0.9},
        visible: {opacity: 1, y: 0, scale: 1, transition: {duration: 0.4, ease:`easeInOut`}}
    }}
    style={{
      boxShadow:`0px 0px 8px 0px #00000059`,
      padding: `${p}px`,
      "--cs": colstart,
      "--csp": colspan ? `span ${colspan}`:null,
      "--rs": rowstart ,
      "--rsp": rowspan ? `span ${rowspan}`:null,
    }}
    className={`
      lg:[grid-column-start:var(--cs)]  lg:[grid-column-end:var(--csp)]  lg:[grid-row-start:var(--rs)]  lg:[grid-row-end:var(--rsp)] 
      relative  overflow-hidden   flex gap-4 flex-col rounded-2xl  backdrop-blur-2xl ${style}
      card text-text border-border border-2
      `}
    >
      {children}
    </motion.div>
  )
}
