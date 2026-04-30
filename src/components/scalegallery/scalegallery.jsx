import './scalegallery.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ScaleGallery() {
    const items = [
        '/public/images/flou-bleu.jpg',
        '/public/images/la-night.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/la-night2.jpg',
        '/public/images/flou-violet.jpg'        
    ]

    const itemsList = [...items, ...items]
    const scrollRef = useRef();

    const getRandomPosition = () => Math.floor(Math.random() * (65 - 5) ) + 5;
    const getRandomWidth = () => Math.floor(Math.random() * (350 - 300) ) + 300;

    const { scrollYProgress: progressA } = useScroll({
        target: scrollRef,
        offset: ["start start", "end end"]
    })

    const opacityList = [
        useTransform(progressA, [0, 0.15, 0.3, 0.45], [0, 1, 1, 0]),
        useTransform(progressA, [0.08, 0.2, 0.4, 0.55], [0, 1, 1, 0]),
        useTransform(progressA, [0.2, 0.35, 0.5, 0.65], [0, 1, 1, 0]),
        useTransform(progressA, [0.3, 0.45, 0.6, 0.75], [0, 1, 1, 0]),
        useTransform(progressA, [0.4, 0.55, 0.7, 0.85], [0, 1, 1, 0]),
        useTransform(progressA, [0.5, 0.65, 0.8, 0.9], [0, 1, 1, 0]),
        useTransform(progressA, [0.6, 0.75, 0.85, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.65, 0.8, 0.95, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]),
    ];

    const scaleList = [
        useTransform(progressA, [0, 0.15, 0.3, 0.45], [0, 1, 1, 0]),
        useTransform(progressA, [0.08, 0.2, 0.4, 0.55], [0, 1, 1, 0]),
        useTransform(progressA, [0.2, 0.35, 0.5, 0.65], [0, 1, 1, 0]),
        useTransform(progressA, [0.3, 0.45, 0.6, 0.75], [0, 1, 1, 0]),
        useTransform(progressA, [0.4, 0.55, 0.7, 0.85], [0, 1, 1, 0]),
        useTransform(progressA, [0.5, 0.65, 0.8, 0.9], [0, 1, 1, 0]),
        useTransform(progressA, [0.6, 0.75, 0.85, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.65, 0.8, 0.95, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.7, 0.8, 0.9, 1], [0, 1, 1, 0]),
        useTransform(progressA, [0.75, 0.85, 0.95, 1], [0, 1, 1, 0]),
    ]

    return(
        <section className='scale-gallery' ref={scrollRef}>
            <div className='scale-gallery__content'>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nihil voluptatibus esse ratione provident accusamus.</h2>
                <h2>Iure modi, praesentium harum officiis culpa recusandae numquam optio ea dignissimos odit adipisci tenetur ipsum?</h2>
                <div className='scale-gallery__wrapper'>
                    {itemsList.map((item, index) => {
                        const left = getRandomPosition();
                        const top = getRandomPosition();
                        const width = getRandomWidth();

                        return (
                            <motion.div 

                                className='scale-gallery__item'
                                style={{ 
                                    width: `${width}px`,
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    opacity: opacityList[index],
                                    scale: scaleList[index]
                                }}
                                key={item + index}
                            >
                                <img src={item} alt="" />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}