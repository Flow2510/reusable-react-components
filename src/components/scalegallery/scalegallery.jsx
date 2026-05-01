import './scalegallery.scss';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ScaleGallery() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    const items = [
        '/public/images/flou-bleu.jpg',
        '/public/images/la-night.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/la-night2.jpg',
        '/public/images/flou-violet.jpg'        
    ]

    const itemsList = [...items, ...items]
    const scrollRef = useRef();

    const getRandomWidth = () => 
        isDesktop? 
            Math.floor(Math.random() * (400 - 300) ) + 300
        :
            Math.floor(Math.random() * (250 - 150) ) + 150    
    ;

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    })

    const positionList = [
        {
            top: 10,
            left: 30
        },
        {
            top: 60,
            left: 60
        },
        {
            top: 40,
            left: 10
        },
        {
            top: 25,
            left: 50
        },
        {
            top: 10,
            left: 5
        },
        {
            top: 60,
            left: 70
        },
        {
            top: 10,
            left: 70
        },
        {
            top: 40,
            left: 40
        },
        {
            top: 70,
            left: 15
        },
        {
            top: 25,
            left: 15
        }
    ]

    const scaleList = [
        useTransform(scrollYProgress, [0, 0.08, 0.2, 0.28], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.09, 0.17, 0.29, 0.37], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.19, 0.27, 0.39, 0.47], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.27, 0.35, 0.47, 0.55], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.37, 0.45, 0.57, 0.65], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.44, 0.52, 0.64, 0.72], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.54, 0.62, 0.74, 0.82], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.62, 0.7, 0.82, 0.9], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.7, 0.78, 0.9, 0.98], [0, 1, 1, 0]),
        useTransform(scrollYProgress, [0.78, 0.86, 0.94, 1], [0, 1, 1, 0]),
    ];

    const opacityList = [
        useTransform(scrollYProgress, [0.2, 0.28], [1, 0]),
        useTransform(scrollYProgress, [0.29, 0.37], [1, 0]),
        useTransform(scrollYProgress, [0.39, 0.47], [1, 0]),
        useTransform(scrollYProgress, [0.47, 0.55], [1, 0]),
        useTransform(scrollYProgress, [0.57, 0.65], [1, 0]),
        useTransform(scrollYProgress, [0.64, 0.72], [1, 0]),
        useTransform(scrollYProgress, [0.74, 0.82], [1, 0]),
        useTransform(scrollYProgress, [0.82, 0.9], [1, 0]),
        useTransform(scrollYProgress, [0.9, 0.98], [1, 0]),
        useTransform(scrollYProgress, [0.94, 1], [1, 0]),
    ];

    return(
        <section className='scale-gallery' ref={scrollRef}>
            <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "tween"}}
                className='scale-gallery__content'
            >
                <h2>Scroll Driven Gallery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed expedita inventore natus nulla? Non!</p>
                <div className='scale-gallery__wrapper'>
                    {itemsList.map((item, index) => {
                        const width = getRandomWidth();

                        return (
                            <motion.div 
                                className='scale-gallery__item'
                                style={{ 
                                    width: `${width}px`,
                                    left: `${positionList[index].left}%`,
                                    top: `${positionList[index].top}%`,       
                                    opacity: opacityList[index],                          
                                    scale: scaleList[index]
                                }}
                                key={item + index}
                            >
                                <img src={item} alt=""/>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>
        </section>
    )
}