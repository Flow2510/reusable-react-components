import { useRef } from 'react'
import './revealcta.scss'
import { motion, useScroll, useTransform } from 'motion/react'

export default function RevealCta() {

    const scrollRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start center", "end center"]
    })
    const y = useTransform(scrollYProgress, [0, 1], [150, -150])
    const height = useTransform(scrollYProgress, [0, 1], ["90%", "0%"])

    return(
        <section className='reveal-cta' ref={scrollRef}>
            <div className='reveal-cta__content'>
                <motion.div 
                    className='reveal-cta__overlay'
                    style={{ height }}
                ></motion.div>
                <h2>
                    <span>Simple CTA</span> 
                    <span>with</span> 
                    <span>scroll driven</span>
                    <span>text opacity reveal</span> 
                </h2>
            </div>
        </section>
    )
}