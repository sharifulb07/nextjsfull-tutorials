
import * as motion  from 'motion/react-client';

export default function BouncingBall(){

    return(
        <div className='flex items-center justify-center min-h-screen'>

        <motion.div 
        animate={{y:[0,-100,0]}}
        transition={{duration:1, repeat:Infinity, ease:'easeInOut'}}
        className='box'>

        </motion.div>
        </div>
    )
}