import { useRef, useState } from 'react';
import './linereveal.scss';
import { motion, useScroll, useTransform } from 'motion/react';

export default function LineReveal({ text }) {
    const ref = useRef(null)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "start center"]
    })

    const LINEHEIGHT = isDesktop ? 90 : 48 ;

    const height = useTransform(scrollYProgress, [0, 1], [0, LINEHEIGHT])

    return(
        <motion.span className='line-reveal' ref={ref} style={{height}}>
            <motion.span className='line-reveal__wrapper'>
                {text}
            </motion.span>
        </motion.span>
    )
}