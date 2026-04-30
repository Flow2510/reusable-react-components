import { AnimatePresence, motion } from "motion/react";
import "./horizontalcarousel.scss";
import { useEffect, useState } from "react";

export default function VerticalCarousel() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    useEffect(() => (
        console.log(window.innerWidth)
    ), [window.innerWidth])

    const items = [
        '/public/images/flou-bleu.jpg',
        '/public/images/la-night.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/la-night2.jpg',
        '/public/images/flou-violet.jpg'        
    ]

    const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 scroll infini
    const handleWheel = (e) => {
        if (e.deltaY < 0) {
            setActiveIndex((prev) => (prev + 1) % items.length);
        } else {
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    const slots = [0, 1, 2, 3, 4];

    return (
        <section className="horizontal-carousel">
            {isDesktop ?
                <div className="horizontal-carousel__wrapper">
                    <div className="horizontal-carousel__content">
                        <h2 className="horizontal-carousel__content-title">
                            <span>Lorem ipsum</span>
                            <span>Dolor sit amet</span>
                        </h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="horizontal-carousel__content-text"
                        >
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span>Fugit deleniti unde nam, error sunt odio, consectetur cupiditate exercitationem.</span>
                        </motion.p>
                        <div className="horizontal-carousel__content-wrapper">
                            <span>Lorem</span>
                            <span>Ipsum</span>
                        </div>
                    </div>
                    <div className="horizontal-carousel__gallery" onWheel={handleWheel}>
                        {slots.map((s, slotIndex) => {
                            const imageIndex =
                                (activeIndex + slotIndex) % items.length;

                            return (
                                <div
                                    key={s}
                                    className={`horizontal-carousel__item horizontal-carousel__item--${slotIndex + 1}`}
                                >
                                    <motion.img
                                        initial= {{ scale: 1.3 }}
                                        animate= {{ scale: 1 }}
                                        transition= {{ duration: 0.5}}
                                        key={items[imageIndex]}
                                        src={items[imageIndex]}
                                        alt=""
                                        className="horizontal-carousel__item-image"
                                    />
                                    <div className="horizontal-carousel__item-wrapper">
                                        <p>Lorem</p>
                                        <p>{imageIndex + 1}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            :
                <div className="mobile-horizontal-carousel" onWheel={handleWheel}>
                    <div className="mobile-horizontal-carousel__content">
                        <h2 className="mobile-horizontal-carousel__content-title">
                            <span>Lorem ipsum</span>
                            <span>Dolor sit amet</span>
                        </h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="mobile-horizontal-carousel__content-text"
                        >
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span>Fugit deleniti unde nam, error sunt odio, consectetur cupiditate exercitationem.</span>
                        </motion.p>
                        <div className="mobile-horizontal-carousel__content-wrapper">
                            <span>Lorem</span>
                            <span>Ipsum</span>
                        </div>
                    </div>
                    <div className="mobile-horizontal-carousel__item">
                        <AnimatePresence>
                            <motion.img 
                                className="mobile-horizontal-carousel__item-image" 
                                src={items[activeIndex]} 
                                alt="" 
                            />
                        </AnimatePresence>
                    </div>
                </div>
            }
        </section>
    );
}