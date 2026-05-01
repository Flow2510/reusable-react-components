import { useRef } from 'react'
import LineReveal from '../linereveal/linereveal'
import './textsection.scss'
import { motion, useScroll, useTransform } from 'motion/react'

export default function TextSection(){
    const ref = useRef(null)
    const {scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "start 30%"]
    })

    const y = useTransform(scrollYProgress, [0, 0.8], [-500 , 0])
    const rotateZ = useTransform(scrollYProgress, [0, 1], [-30, 0])

    return(
        <section className='text-section'>
            <div className='text-section__wrapper'>
                <h2>
                    <LineReveal 
                        text={"lorem ipsum"}
                    />
                    <LineReveal 
                        text={"dolor sit amet"}
                    />
                    <LineReveal 
                        text={"consectetur adipisicing"}
                    />
                </h2>
            </div>
            <div className='text-section__container' ref={ref}>
                <motion.div className='text-section__card' style={{ y, rotateZ }}>
                    <div className='text-section__card-content' >
                        <p>
                            <span>Lorem ipsum dolor sit amet consectetur <i>adipisicing elit.</i></span>
                            <span>Repellat dolore cumque atque, molestiae, autem facere tempore suscipit aut.</span>
                            <span><i>Quod fugiat eaque quas sed!</i> Quod praesentium nisi fugiat aperiam fugit magni.</span></p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}