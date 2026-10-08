import { motion } from "framer-motion"

export function NumberCard({number, fontSize = 5, title, unit=``}){
    return (
        <>
        <div className="w-full h-full flex items-center justify-center">
        <div className="w-fit h-full items-center flex flex-col justify-center relative gap-4">
        <div className="w-full  overflow-hidden relative ">
            <motion.div 
            initial={{translateY: `0`}}
            animate={{translateY: `-${number * fontSize}rem`}}
            transition={{duration:2}}
            
            className="flex flex-col  items-center justufy-center   transition-transform duration-500 ease-out leading-none  text-center">{
            Array.from({length:number + 1}).map((_, i)=>{
                return(
                <div key={i} 
                style={{
                    fontSize: `${fontSize}rem`
                }}
                className="h-full flex items-center shrink-0 justify-center font-extrabold tracking-lighter"
                >{i}{unit}</div>
                )
            })  
            }</motion.div>
        </div>
        <div className="w-full text-center px-2 uppercase">{title}</div>
        </div>
        </div>
        </>
    )
}