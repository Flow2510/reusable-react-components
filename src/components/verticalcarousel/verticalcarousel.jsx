import './verticalcarousel.scss'

import data from '../../data/data.json'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function VerticalCarousel(){
    const [activeIndex, setActiveIndex] = useState(0);

    const items = data;

    const handleWheel = (e) => {
    if (e.deltaY > 0) {
        // scroll vers le bas
        setActiveIndex((prev) => (prev + 1) % items.length);
    } else {
        // scroll vers le haut
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    }
    };

    const visibleRange = 7;

    const visibleItems = Array.from({ length: visibleRange * 2 + 1 }, (_, i) => i - visibleRange).map((offset) => {
        const index = (activeIndex + offset + items.length) % items.length;
        return {
            ...items[index],
            realIndex: index,
            offset,
        };
    });

    const images = [
        '/public/images/flou-bleu.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/flou-violet.jpg'
    ]

    return(
        <section className='vertical-carrousel'>
            <div className='vertical-carousel__wrapper'>
                <nav
                    className="vertical-carousel__nav"
                    onWheel={handleWheel}
                    >
                    {visibleItems.map((item) => {
                        const isActive = item.offset === 0;

                        return (
                        <button
                            key={`${item.realIndex}-${item.offset}`}
                            onClick={() => setActiveIndex(item.realIndex)}
                            className={`vertical-carousel__nav-button${
                                isActive
                                    ? " vertical-carousel__nav-button--active"
                                    : ""
                            }`}
                        >
                            <h2>{item.title}</h2>
                        </button>
                        );
                    })}
                </nav>
                <div className='vertical-carousel__gallery'>
                    <AnimatePresence mode="popLayout">
                        {images.map((image, i) => (
                            <motion.img
                                key={`${image}-${activeIndex}`}
                                src={image}
                                className={`vertical-carousel__gallery-image vertical-carousel__gallery-image--${i + 1}`}
                                initial={{ x: "100%", opacity: 0 }}
                                animate={{ x: "0%", opacity: 1, transition: { delay: i/10 , duration: 0.4 } }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        ))}                            
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}