import { motion, useScroll, useTransform } from 'motion/react';
import './imageparallax.scss';
import { useRef, useState } from 'react';

export default function ImageParallax(){
    const ref=useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    return(
        <section className='image-parallax' ref={ref}>
            <motion.div className='image-parallax__wrapper' style={{ scale }}>
                <motion.img src="/public/images/la-night2.jpg" alt="" style={{ y }}/>
            </motion.div>
        </section>
    )
}