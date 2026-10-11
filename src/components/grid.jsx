import { motion, stagger } from "framer-motion"
import { Nav } from "./nav"

export function Grid({children, theme}){
    return (
        <>
        <div className="w-[80vw] h-[90vh]  z-20 absolute top-1/2 p-4 left-1/2 translate-[-50%] ">
        <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {opacity: 0},
          visible: {opacity:1,transition: {delayChildren:stagger(0.3)}}
        }}
        className="grid gap-4 auto-rows-[12rem] gap-3 p-3 grid-col-1 [grid-auto-flow::dense] md:grid-col-2 md:auto-rows-[14rem] md:mx-auto md:mx-auto lg:grid-col-12 lg:grid-cols-12 lg:grid-rows-12  w-full h-full">
          {/* intro */}    
        {children}
        </motion.div>

        </div>
        <Nav theme={theme}/>
        </>
    )
}
